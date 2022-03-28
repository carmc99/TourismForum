import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
export declare class CommentRelationsResolver {
    user(comment: Comment, ctx: any): Promise<User>;
    post(comment: Comment, ctx: any): Promise<Post>;
}
