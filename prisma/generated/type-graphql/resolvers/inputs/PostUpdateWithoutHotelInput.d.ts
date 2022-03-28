import { CommentUpdateManyWithoutPostInput } from "../inputs/CommentUpdateManyWithoutPostInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBiomeFieldUpdateOperationsInput } from "../inputs/EnumBiomeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LocationUpdateOneRequiredWithoutPostsInput } from "../inputs/LocationUpdateOneRequiredWithoutPostsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPostsInput } from "../inputs/UserUpdateOneRequiredWithoutPostsInput";
export declare class PostUpdateWithoutHotelInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    author?: UserUpdateOneRequiredWithoutPostsInput | undefined;
    location?: LocationUpdateOneRequiredWithoutPostsInput | undefined;
    biome?: EnumBiomeFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    image?: StringFieldUpdateOperationsInput | undefined;
    average_score?: IntFieldUpdateOperationsInput | undefined;
    comments?: CommentUpdateManyWithoutPostInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
