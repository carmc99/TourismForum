import { PagesCreateNestedManyWithoutRolesInput } from "../inputs/PagesCreateNestedManyWithoutRolesInput";
export declare class RoleCreateWithoutUsersInput {
    id?: string | undefined;
    name: string;
    pages?: PagesCreateNestedManyWithoutRolesInput | undefined;
}
