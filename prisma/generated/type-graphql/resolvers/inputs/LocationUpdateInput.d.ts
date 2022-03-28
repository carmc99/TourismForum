import { CountryUpdateOneRequiredWithoutLocationsInput } from "../inputs/CountryUpdateOneRequiredWithoutLocationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateManyWithoutLocationInput } from "../inputs/PostUpdateManyWithoutLocationInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LocationUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    posts?: PostUpdateManyWithoutLocationInput | undefined;
    country?: CountryUpdateOneRequiredWithoutLocationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
