import { PagesUpdateManyWithoutRolesInput } from "../inputs/PagesUpdateManyWithoutRolesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutRoleInput } from "../inputs/UserUpdateManyWithoutRoleInput";
export declare class RoleUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    users?: UserUpdateManyWithoutRoleInput | undefined;
    pages?: PagesUpdateManyWithoutRolesInput | undefined;
}
