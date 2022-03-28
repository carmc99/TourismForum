import { UserCreateNestedManyWithoutRoleInput } from "../inputs/UserCreateNestedManyWithoutRoleInput";
export declare class RoleCreateWithoutPagesInput {
    id?: string | undefined;
    name: string;
    users?: UserCreateNestedManyWithoutRoleInput | undefined;
}
