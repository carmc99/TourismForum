import { CountryRelationFilter } from "../inputs/CountryRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ProfileWhereInput {
    AND?: ProfileWhereInput[] | undefined;
    OR?: ProfileWhereInput[] | undefined;
    NOT?: ProfileWhereInput[] | undefined;
    id?: StringFilter | undefined;
    phone?: StringFilter | undefined;
    address?: StringFilter | undefined;
    image?: StringFilter | undefined;
    gender?: StringFilter | undefined;
    countryId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    country?: CountryRelationFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}
