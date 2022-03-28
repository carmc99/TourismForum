import { CountryRelationFilter } from "../inputs/CountryRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class LocationWhereInput {
    AND?: LocationWhereInput[] | undefined;
    OR?: LocationWhereInput[] | undefined;
    NOT?: LocationWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    countryId?: StringFilter | undefined;
    posts?: PostListRelationFilter | undefined;
    country?: CountryRelationFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}
