import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProfileScalarWhereInput {
    AND?: ProfileScalarWhereInput[] | undefined;
    OR?: ProfileScalarWhereInput[] | undefined;
    NOT?: ProfileScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    phone?: StringFilter | undefined;
    address?: StringFilter | undefined;
    image?: StringFilter | undefined;
    gender?: StringFilter | undefined;
    countryId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}
