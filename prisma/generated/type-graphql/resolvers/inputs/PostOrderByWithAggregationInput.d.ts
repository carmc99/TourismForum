import { PostAvgOrderByAggregateInput } from "../inputs/PostAvgOrderByAggregateInput";
import { PostCountOrderByAggregateInput } from "../inputs/PostCountOrderByAggregateInput";
import { PostMaxOrderByAggregateInput } from "../inputs/PostMaxOrderByAggregateInput";
import { PostMinOrderByAggregateInput } from "../inputs/PostMinOrderByAggregateInput";
import { PostSumOrderByAggregateInput } from "../inputs/PostSumOrderByAggregateInput";
export declare class PostOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    locationId?: "asc" | "desc" | undefined;
    biome?: "asc" | "desc" | undefined;
    hotelId?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    average_score?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: PostCountOrderByAggregateInput | undefined;
    _avg?: PostAvgOrderByAggregateInput | undefined;
    _max?: PostMaxOrderByAggregateInput | undefined;
    _min?: PostMinOrderByAggregateInput | undefined;
    _sum?: PostSumOrderByAggregateInput | undefined;
}
