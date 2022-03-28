import { GraphQLResolveInfo } from "graphql";
import { UpsertCommentArgs } from "./args/UpsertCommentArgs";
import { Comment } from "../../../models/Comment";
export declare class UpsertCommentResolver {
    upsertComment(ctx: any, info: GraphQLResolveInfo, args: UpsertCommentArgs): Promise<Comment>;
}
