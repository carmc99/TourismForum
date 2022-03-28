import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class CommentWhereInput {
    AND?: CommentWhereInput[] | undefined;
    OR?: CommentWhereInput[] | undefined;
    NOT?: CommentWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    postId?: StringFilter | undefined;
    post?: PostRelationFilter | undefined;
    description?: StringFilter | undefined;
    score?: IntFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}
