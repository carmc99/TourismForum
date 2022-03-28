import { GraphQLResolveInfo } from "graphql";
import { DeleteCommentArgs } from "./args/DeleteCommentArgs";
import { Comment } from "../../../models/Comment";
export declare class DeleteCommentResolver {
    deleteComment(ctx: any, info: GraphQLResolveInfo, args: DeleteCommentArgs): Promise<Comment | null>;
}
