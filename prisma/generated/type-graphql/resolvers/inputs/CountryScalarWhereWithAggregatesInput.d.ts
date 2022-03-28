import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CountryScalarWhereWithAggregatesInput {
    AND?: CountryScalarWhereWithAggregatesInput[] | undefined;
    OR?: CountryScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CountryScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
}
