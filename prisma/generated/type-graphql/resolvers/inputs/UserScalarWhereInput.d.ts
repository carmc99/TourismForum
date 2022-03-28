import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class UserScalarWhereInput {
    AND?: UserScalarWhereInput[] | undefined;
    OR?: UserScalarWhereInput[] | undefined;
    NOT?: UserScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    email?: StringFilter | undefined;
    emailVerified?: DateTimeFilter | undefined;
    roleId?: StringFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}
