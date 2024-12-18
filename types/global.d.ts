
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