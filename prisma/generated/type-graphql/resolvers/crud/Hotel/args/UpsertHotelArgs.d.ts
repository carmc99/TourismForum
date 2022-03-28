import { HotelCreateInput } from "../../../inputs/HotelCreateInput";
import { HotelUpdateInput } from "../../../inputs/HotelUpdateInput";
import { HotelWhereUniqueInput } from "../../../inputs/HotelWhereUniqueInput";
export declare class UpsertHotelArgs {
    where: HotelWhereUniqueInput;
    create: HotelCreateInput;
    update: HotelUpdateInput;
}
