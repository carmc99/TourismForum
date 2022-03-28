import { Post } from "../models/Post";
import { User } from "../models/User";
export declare class Comment {
    id: string;
    userId: string;
    user?: User;
    postId: string;
    post?: Post;
    description: string;
    score: number;
    created_at: Date;
    updated_at: Date;
}
