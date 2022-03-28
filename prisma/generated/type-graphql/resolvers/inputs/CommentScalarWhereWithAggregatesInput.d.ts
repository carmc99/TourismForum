import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CommentScalarWhereWithAggregatesInput {
    AND?: CommentScalarWhereWithAggregatesInput[] | undefined;
    OR?: CommentScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CommentScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    postId?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    score?: IntWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
}
