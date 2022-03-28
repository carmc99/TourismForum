import { LocationOrderByRelationAggregateInput } from "../inputs/LocationOrderByRelationAggregateInput";
import { ProfileOrderByRelationAggregateInput } from "../inputs/ProfileOrderByRelationAggregateInput";
export declare class CountryOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    profiles?: ProfileOrderByRelationAggregateInput | undefined;
    locations?: LocationOrderByRelationAggregateInput | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
}
