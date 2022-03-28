import { GraphQLResolveInfo } from "graphql";
import { UpdateCommentArgs } from "./args/UpdateCommentArgs";
import { Comment } from "../../../models/Comment";
export declare class UpdateCommentResolver {
    updateComment(ctx: any, info: GraphQLResolveInfo, args: UpdateCommentArgs): Promise<Comment | null>;
}
