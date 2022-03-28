import { Comment } from "../../../models/Comment";
import { Hotel } from "../../../models/Hotel";
import { Location } from "../../../models/Location";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { PostCommentsArgs } from "./args/PostCommentsArgs";
export declare class PostRelationsResolver {
    author(post: Post, ctx: any): Promise<User>;
    location(post: Post, ctx: any): Promise<Location>;
    hotel(post: Post, ctx: any): Promise<Hotel | null>;
    comments(post: Post, ctx: any, args: PostCommentsArgs): Promise<Comment[]>;
}
