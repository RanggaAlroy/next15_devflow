import  mongoose  from "mongoose";
import slugify from "slugify";

import Account from "@/database/account.model";
import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-error";
import dbConnect from "@/lib/mongoose";
import { SignInWithOAuthSchema } from "@/lib/validation";
import { APIErrorResponse } from "@/types/global";


export async function POST(request: Request) {
    const {provider, providerAccountId, user} = await request.json();

    await dbConnect();

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const validateData = SignInWithOAuthSchema.safeParse({provider, providerAccountId, user});

        if (!validateData.success) {
            throw new ValidationError(validateData.error.flatten().fieldErrors);
        }

        const {email, image, name, username} = user;

        const slugifiedUsername = slugify(username, {
            lower: true,
            strict: true,
            trim: true,
        })

         let existingUser = await User.findOne({ email }).session(session);

        if(!existingUser) {
            [existingUser] = await User.create([{ name, username: slugifiedUsername, email, image }], { session });
        } else {
            const updatedData: { name?: string, username?: string, image?: string } = {};

            if (name !== existingUser.name) updatedData.name = name;
            if(image !== existingUser.image) updatedData.image = image;

            if(Object.keys(updatedData).length > 0) {
                await User.updateOne({_id : existingUser._id}, { $set: updatedData }).session(session);
            }
        }

        const existingAccount = await Account.findOne({
            userId: existingUser._id,
            provider,
            providerAccountId
        }).session(session);

        if(!existingAccount) {
            await Account.create([{
                userId: existingUser._id,
                name,
                image,
                provider,
                providerAccountId
            }], {session});
        }
        
        await session.commitTransaction();

    } catch (error: unknown) {
        await session.abortTransaction();
        return handleError(error, "api") as APIErrorResponse;
    } finally {
        session.endSession();
    }



}