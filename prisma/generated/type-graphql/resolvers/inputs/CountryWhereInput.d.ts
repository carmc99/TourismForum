import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { LocationListRelationFilter } from "../inputs/LocationListRelationFilter";
import { ProfileListRelationFilter } from "../inputs/ProfileListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CountryWhereInput {
    AND?: CountryWhereInput[] | undefined;
    OR?: CountryWhereInput[] | undefined;
    NOT?: CountryWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    profiles?: ProfileListRelationFilter | undefined;
    locations?: LocationListRelationFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}
