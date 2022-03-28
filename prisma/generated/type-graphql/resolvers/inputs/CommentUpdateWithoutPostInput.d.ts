import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsInput";
export declare class CommentUpdateWithoutPostInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutCommentsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    score?: IntFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
