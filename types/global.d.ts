import { NextResponse } from "next/server";

interface Tags {
    _id: string;
    name: string;
}

interface Author {
    _id: string;
    name: string;
    image: string;
}
interface Question {
    _id: string;
    title: string;
    tags: Tag[];
    answers: number;
    views: number;
    upvotes: number;
    createdAt: Date;
    author: Author;
}


type ActionResponse<T = null> = {
    success: boolean;
    data?: T;
    error?: {
      message: string;
      details?: Record<string, string[]>;
    };
    status?: number;
  };

type SuccessResponse<T = null> = ActionResponse<T> & { success: true };
type ErrorResponse = ActionResponse<undefined> & { success: false };

type APIErrorResponse = NextResponse<ErrorResponse>;
type APIResponse<T = null> = NextResponse<SuccessResponse<T> | ErrorResponse>;