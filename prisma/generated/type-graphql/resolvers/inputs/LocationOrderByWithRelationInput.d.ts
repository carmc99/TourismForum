import { CountryOrderByWithRelationInput } from "../inputs/CountryOrderByWithRelationInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
export declare class LocationOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    countryId?: "asc" | "desc" | undefined;
    posts?: PostOrderByRelationAggregateInput | undefined;
    country?: CountryOrderByWithRelationInput | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
}
