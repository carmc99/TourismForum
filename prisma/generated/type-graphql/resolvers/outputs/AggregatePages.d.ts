import { PagesCountAggregate } from "../outputs/PagesCountAggregate";
import { PagesMaxAggregate } from "../outputs/PagesMaxAggregate";
import { PagesMinAggregate } from "../outputs/PagesMinAggregate";
export declare class AggregatePages {
    _count: PagesCountAggregate | null;
    _min: PagesMinAggregate | null;
    _max: PagesMaxAggregate | null;
}
