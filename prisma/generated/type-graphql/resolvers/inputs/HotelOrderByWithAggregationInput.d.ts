import { HotelAvgOrderByAggregateInput } from "../inputs/HotelAvgOrderByAggregateInput";
import { HotelCountOrderByAggregateInput } from "../inputs/HotelCountOrderByAggregateInput";
import { HotelMaxOrderByAggregateInput } from "../inputs/HotelMaxOrderByAggregateInput";
import { HotelMinOrderByAggregateInput } from "../inputs/HotelMinOrderByAggregateInput";
import { HotelSumOrderByAggregateInput } from "../inputs/HotelSumOrderByAggregateInput";
export declare class HotelOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    price_per_night?: "asc" | "desc" | undefined;
    lunch_included?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: HotelCountOrderByAggregateInput | undefined;
    _avg?: HotelAvgOrderByAggregateInput | undefined;
    _max?: HotelMaxOrderByAggregateInput | undefined;
    _min?: HotelMinOrderByAggregateInput | undefined;
    _sum?: HotelSumOrderByAggregateInput | undefined;
}
