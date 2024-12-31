import { Schema, model, models } from "mongoose";

interface IUser {
    name: string;
    username: string;
    email: string;
    bio?: string;
    image: string;
    location?: string;
    portfolio?: string;
    reputation?: number;
}


const UseSchema = new Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        bio: { type: String },
        image: { type: String , required: true },
        location: { type: String },
        portfolio: { type: String },
        reputation: { type: Number, default: 0 },
    },
    {
        timestamps: true,
    }
)

const User = models?.user || model<IUser>("user", UseSchema);

export default User