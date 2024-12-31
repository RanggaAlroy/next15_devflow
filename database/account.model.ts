import { model, models, Schema, Types } from "mongoose";

interface IAccount {
    userId: Types.ObjectId;
    name: string;
    image?: string;
    password?: string;
    provider: string;
    providerAccountId: string;
}

const AccountSchema = new Schema<IAccount>(
    {
        userId: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
        name: { type: String, required: true },
        image: { type: String},
        password: { type: String},
        provider: { type: String, required: true },
        providerAccountId: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

const Account = models?.account || model<IAccount>('account', AccountSchema);

export default Account