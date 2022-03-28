import { PagesUpdateManyWithoutRolesInput } from "../inputs/PagesUpdateManyWithoutRolesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class RoleUpdateWithoutUsersInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    pages?: PagesUpdateManyWithoutRolesInput | undefined;
}
