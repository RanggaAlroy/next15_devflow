import { model, models, Schema, Types } from "mongoose";

interface IQuestion {
    title: string;
    content: string;
    tags: string[];
    views: number;
    answers: number;
    upvotes: number;
    downvotes: number;
    author: Types.ObjectId
}

const QuestionSchema = new Schema<IQuestion>(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        tags: { type: [String], required: true },
        views: { type: Number, default: 0 },
        answers: { type: Number, default: 0 },
        upvotes: { type: Number, default: 0 },
        downvotes: { type: Number, default: 0 },
        author: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    },
    {
        timestamps: true,
    }
)

 const Question = models?.Question || model<IQuestion>("Question", QuestionSchema);

 export default Question