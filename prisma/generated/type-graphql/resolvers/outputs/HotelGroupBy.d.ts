import { HotelAvgAggregate } from "../outputs/HotelAvgAggregate";
import { HotelCountAggregate } from "../outputs/HotelCountAggregate";
import { HotelMaxAggregate } from "../outputs/HotelMaxAggregate";
import { HotelMinAggregate } from "../outputs/HotelMinAggregate";
import { HotelSumAggregate } from "../outputs/HotelSumAggregate";
export declare class HotelGroupBy {
    id: string;
    name: string;
    price_per_night: number;
    lunch_included: boolean;
    image: string;
    created_at: Date;
    updated_at: Date;
    _count: HotelCountAggregate | null;
    _avg: HotelAvgAggregate | null;
    _sum: HotelSumAggregate | null;
    _min: HotelMinAggregate | null;
    _max: HotelMaxAggregate | null;
}
