import { AccountUpdateManyWithoutUserInput } from "../inputs/AccountUpdateManyWithoutUserInput";
import { CommentUpdateManyWithoutUserInput } from "../inputs/CommentUpdateManyWithoutUserInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateManyWithoutAuthorInput } from "../inputs/PostUpdateManyWithoutAuthorInput";
import { ProfileUpdateOneWithoutUserInput } from "../inputs/ProfileUpdateOneWithoutUserInput";
import { RoleUpdateOneRequiredWithoutUsersInput } from "../inputs/RoleUpdateOneRequiredWithoutUsersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutSessionsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    emailVerified?: DateTimeFieldUpdateOperationsInput | undefined;
    role?: RoleUpdateOneRequiredWithoutUsersInput | undefined;
    profile?: ProfileUpdateOneWithoutUserInput | undefined;
    accounts?: AccountUpdateManyWithoutUserInput | undefined;
    posts?: PostUpdateManyWithoutAuthorInput | undefined;
    comments?: CommentUpdateManyWithoutUserInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
