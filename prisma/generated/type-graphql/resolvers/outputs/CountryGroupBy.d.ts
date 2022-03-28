import { CountryCountAggregate } from "../outputs/CountryCountAggregate";
import { CountryMaxAggregate } from "../outputs/CountryMaxAggregate";
import { CountryMinAggregate } from "../outputs/CountryMinAggregate";
export declare class CountryGroupBy {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: CountryCountAggregate | null;
    _min: CountryMinAggregate | null;
    _max: CountryMaxAggregate | null;
}
