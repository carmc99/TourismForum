import { GraphQLResolveInfo } from "graphql";
import { CreateCommentArgs } from "./args/CreateCommentArgs";
import { Comment } from "../../../models/Comment";
export declare class CreateCommentResolver {
    createComment(ctx: any, info: GraphQLResolveInfo, args: CreateCommentArgs): Promise<Comment>;
}
