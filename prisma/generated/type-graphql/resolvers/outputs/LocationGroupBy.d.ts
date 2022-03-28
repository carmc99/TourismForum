import { LocationCountAggregate } from "../outputs/LocationCountAggregate";
import { LocationMaxAggregate } from "../outputs/LocationMaxAggregate";
import { LocationMinAggregate } from "../outputs/LocationMinAggregate";
export declare class LocationGroupBy {
    id: string;
    name: string;
    countryId: string;
    created_at: Date;
    updated_at: Date;
    _count: LocationCountAggregate | null;
    _min: LocationMinAggregate | null;
    _max: LocationMaxAggregate | null;
}
