import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { RoleListRelationFilter } from "../inputs/RoleListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class PagesWhereInput {
    AND?: PagesWhereInput[] | undefined;
    OR?: PagesWhereInput[] | undefined;
    NOT?: PagesWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    path?: StringFilter | undefined;
    roles?: RoleListRelationFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
}
