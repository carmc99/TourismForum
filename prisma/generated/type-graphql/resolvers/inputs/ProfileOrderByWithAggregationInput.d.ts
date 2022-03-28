import { ProfileCountOrderByAggregateInput } from "../inputs/ProfileCountOrderByAggregateInput";
import { ProfileMaxOrderByAggregateInput } from "../inputs/ProfileMaxOrderByAggregateInput";
import { ProfileMinOrderByAggregateInput } from "../inputs/ProfileMinOrderByAggregateInput";
export declare class ProfileOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    phone?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    gender?: "asc" | "desc" | undefined;
    countryId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: ProfileCountOrderByAggregateInput | undefined;
    _max?: ProfileMaxOrderByAggregateInput | undefined;
    _min?: ProfileMinOrderByAggregateInput | undefined;
}
