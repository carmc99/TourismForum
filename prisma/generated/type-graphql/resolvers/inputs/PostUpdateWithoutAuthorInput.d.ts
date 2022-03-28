import { CommentUpdateManyWithoutPostInput } from "../inputs/CommentUpdateManyWithoutPostInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBiomeFieldUpdateOperationsInput } from "../inputs/EnumBiomeFieldUpdateOperationsInput";
import { HotelUpdateOneWithoutPostsInput } from "../inputs/HotelUpdateOneWithoutPostsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LocationUpdateOneRequiredWithoutPostsInput } from "../inputs/LocationUpdateOneRequiredWithoutPostsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PostUpdateWithoutAuthorInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    location?: LocationUpdateOneRequiredWithoutPostsInput | undefined;
    biome?: EnumBiomeFieldUpdateOperationsInput | undefined;
    hotel?: HotelUpdateOneWithoutPostsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    image?: StringFieldUpdateOperationsInput | undefined;
    average_score?: IntFieldUpdateOperationsInput | undefined;
    comments?: CommentUpdateManyWithoutPostInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}