import { CommentAvgOrderByAggregateInput } from "../inputs/CommentAvgOrderByAggregateInput";
import { CommentCountOrderByAggregateInput } from "../inputs/CommentCountOrderByAggregateInput";
import { CommentMaxOrderByAggregateInput } from "../inputs/CommentMaxOrderByAggregateInput";
import { CommentMinOrderByAggregateInput } from "../inputs/CommentMinOrderByAggregateInput";
import { CommentSumOrderByAggregateInput } from "../inputs/CommentSumOrderByAggregateInput";
export declare class CommentOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    postId?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    score?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: CommentCountOrderByAggregateInput | undefined;
    _avg?: CommentAvgOrderByAggregateInput | undefined;
    _max?: CommentMaxOrderByAggregateInput | undefined;
    _min?: CommentMinOrderByAggregateInput | undefined;
    _sum?: CommentSumOrderByAggregateInput | undefined;
}
