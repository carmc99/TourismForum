import { HotelAvgAggregate } from "../outputs/HotelAvgAggregate";
import { HotelCountAggregate } from "../outputs/HotelCountAggregate";
import { HotelMaxAggregate } from "../outputs/HotelMaxAggregate";
import { HotelMinAggregate } from "../outputs/HotelMinAggregate";
import { HotelSumAggregate } from "../outputs/HotelSumAggregate";
export declare class AggregateHotel {
    _count: HotelCountAggregate | null;
    _avg: HotelAvgAggregate | null;
    _sum: HotelSumAggregate | null;
    _min: HotelMinAggregate | null;
    _max: HotelMaxAggregate | null;
}
