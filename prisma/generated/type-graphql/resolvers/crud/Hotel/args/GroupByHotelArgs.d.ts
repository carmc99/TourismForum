import { HotelOrderByWithAggregationInput } from "../../../inputs/HotelOrderByWithAggregationInput";
import { HotelScalarWhereWithAggregatesInput } from "../../../inputs/HotelScalarWhereWithAggregatesInput";
import { HotelWhereInput } from "../../../inputs/HotelWhereInput";
export declare class GroupByHotelArgs {
    where?: HotelWhereInput | undefined;
    orderBy?: HotelOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "price_per_night" | "lunch_included" | "image" | "created_at" | "updated_at">;
    having?: HotelScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
