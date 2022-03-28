import { PagesCreateNestedManyWithoutRolesInput } from "../inputs/PagesCreateNestedManyWithoutRolesInput";
import { UserCreateNestedManyWithoutRoleInput } from "../inputs/UserCreateNestedManyWithoutRoleInput";
export declare class RoleCreateInput {
    id?: string | undefined;
    name: string;
    users?: UserCreateNestedManyWithoutRoleInput | undefined;
    pages?: PagesCreateNestedManyWithoutRolesInput | undefined;
}
