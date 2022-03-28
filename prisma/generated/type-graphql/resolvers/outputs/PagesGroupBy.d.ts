import { PagesCountAggregate } from "../outputs/PagesCountAggregate";
import { PagesMaxAggregate } from "../outputs/PagesMaxAggregate";
import { PagesMinAggregate } from "../outputs/PagesMinAggregate";
export declare class PagesGroupBy {
    id: string;
    name: string;
    path: string;
    created_at: Date;
    updated_at: Date;
    _count: PagesCountAggregate | null;
    _min: PagesMinAggregate | null;
    _max: PagesMaxAggregate | null;
}
