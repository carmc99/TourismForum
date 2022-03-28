import { LocationCountOrderByAggregateInput } from "../inputs/LocationCountOrderByAggregateInput";
import { LocationMaxOrderByAggregateInput } from "../inputs/LocationMaxOrderByAggregateInput";
import { LocationMinOrderByAggregateInput } from "../inputs/LocationMinOrderByAggregateInput";
export declare class LocationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    countryId?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: LocationCountOrderByAggregateInput | undefined;
    _max?: LocationMaxOrderByAggregateInput | undefined;
    _min?: LocationMinOrderByAggregateInput | undefined;
}
