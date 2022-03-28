import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutCommentsInput } from "../inputs/PostUpdateOneRequiredWithoutCommentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CommentUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    post?: PostUpdateOneRequiredWithoutCommentsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    score?: IntFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
