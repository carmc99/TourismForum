import { HotelOrderByWithRelationInput } from "../../../inputs/HotelOrderByWithRelationInput";
import { HotelWhereInput } from "../../../inputs/HotelWhereInput";
import { HotelWhereUniqueInput } from "../../../inputs/HotelWhereUniqueInput";
export declare class AggregateHotelArgs {
    where?: HotelWhereInput | undefined;
    orderBy?: HotelOrderByWithRelationInput[] | undefined;
    cursor?: HotelWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
