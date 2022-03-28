import { PagesCountOrderByAggregateInput } from "../inputs/PagesCountOrderByAggregateInput";
import { PagesMaxOrderByAggregateInput } from "../inputs/PagesMaxOrderByAggregateInput";
import { PagesMinOrderByAggregateInput } from "../inputs/PagesMinOrderByAggregateInput";
export declare class PagesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    path?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: PagesCountOrderByAggregateInput | undefined;
    _max?: PagesMaxOrderByAggregateInput | undefined;
    _min?: PagesMinOrderByAggregateInput | undefined;
}
