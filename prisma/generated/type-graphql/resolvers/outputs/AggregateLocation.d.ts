import { LocationCountAggregate } from "../outputs/LocationCountAggregate";
import { LocationMaxAggregate } from "../outputs/LocationMaxAggregate";
import { LocationMinAggregate } from "../outputs/LocationMinAggregate";
export declare class AggregateLocation {
    _count: LocationCountAggregate | null;
    _min: LocationMinAggregate | null;
    _max: LocationMaxAggregate | null;
}
