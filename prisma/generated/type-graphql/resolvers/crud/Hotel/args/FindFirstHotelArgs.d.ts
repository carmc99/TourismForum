import { HotelOrderByWithRelationInput } from "../../../inputs/HotelOrderByWithRelationInput";
import { HotelWhereInput } from "../../../inputs/HotelWhereInput";
import { HotelWhereUniqueInput } from "../../../inputs/HotelWhereUniqueInput";
export declare class FindFirstHotelArgs {
    where?: HotelWhereInput | undefined;
    orderBy?: HotelOrderByWithRelationInput[] | undefined;
    cursor?: HotelWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "price_per_night" | "lunch_included" | "image" | "created_at" | "updated_at"> | undefined;
}
