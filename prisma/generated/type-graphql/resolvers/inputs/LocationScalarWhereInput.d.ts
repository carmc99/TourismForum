import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class LocationScalarWhereInput {
    AND?: LocationScalarWhereInput[] | undefined;
    OR?: LocationScalarWhereInput[] | undefined;
    NOT?: LocationScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    countryId?: StringFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}
