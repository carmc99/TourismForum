import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutCommentsInput } from "../inputs/PostUpdateOneRequiredWithoutCommentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsInput";
export declare class CommentUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutCommentsInput | undefined;
    post?: PostUpdateOneRequiredWithoutCommentsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    score?: IntFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
