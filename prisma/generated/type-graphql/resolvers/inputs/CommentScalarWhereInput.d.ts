import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CommentScalarWhereInput {
    AND?: CommentScalarWhereInput[] | undefined;
    OR?: CommentScalarWhereInput[] | undefined;
    NOT?: CommentScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    postId?: StringFilter | undefined;
    description?: StringFilter | undefined;
    score?: IntFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}
