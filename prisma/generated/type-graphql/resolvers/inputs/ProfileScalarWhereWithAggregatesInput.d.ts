import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProfileScalarWhereWithAggregatesInput {
    AND?: ProfileScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProfileScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProfileScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    phone?: StringWithAggregatesFilter | undefined;
    address?: StringWithAggregatesFilter | undefined;
    image?: StringWithAggregatesFilter | undefined;
    gender?: StringWithAggregatesFilter | undefined;
    countryId?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
}
