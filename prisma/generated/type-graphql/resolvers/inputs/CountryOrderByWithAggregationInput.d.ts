import { CountryCountOrderByAggregateInput } from "../inputs/CountryCountOrderByAggregateInput";
import { CountryMaxOrderByAggregateInput } from "../inputs/CountryMaxOrderByAggregateInput";
import { CountryMinOrderByAggregateInput } from "../inputs/CountryMinOrderByAggregateInput";
export declare class CountryOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: CountryCountOrderByAggregateInput | undefined;
    _max?: CountryMaxOrderByAggregateInput | undefined;
    _min?: CountryMinOrderByAggregateInput | undefined;
}
