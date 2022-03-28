import { PagesListRelationFilter } from "../inputs/PagesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
export declare class RoleWhereInput {
    AND?: RoleWhereInput[] | undefined;
    OR?: RoleWhereInput[] | undefined;
    NOT?: RoleWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    users?: UserListRelationFilter | undefined;
    pages?: PagesListRelationFilter | undefined;
}
