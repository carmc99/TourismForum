import { AccountUpdateManyWithoutUserInput } from "../inputs/AccountUpdateManyWithoutUserInput";
import { CommentUpdateManyWithoutUserInput } from "../inputs/CommentUpdateManyWithoutUserInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProfileUpdateOneWithoutUserInput } from "../inputs/ProfileUpdateOneWithoutUserInput";
import { RoleUpdateOneRequiredWithoutUsersInput } from "../inputs/RoleUpdateOneRequiredWithoutUsersInput";
import { SessionUpdateManyWithoutUserInput } from "../inputs/SessionUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutPostsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    emailVerified?: DateTimeFieldUpdateOperationsInput | undefined;
    role?: RoleUpdateOneRequiredWithoutUsersInput | undefined;
    profile?: ProfileUpdateOneWithoutUserInput | undefined;
    sessions?: SessionUpdateManyWithoutUserInput | undefined;
    accounts?: AccountUpdateManyWithoutUserInput | undefined;
    comments?: CommentUpdateManyWithoutUserInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
