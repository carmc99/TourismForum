import { CountryUpdateOneRequiredWithoutProfilesInput } from "../inputs/CountryUpdateOneRequiredWithoutProfilesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProfileUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    phone?: StringFieldUpdateOperationsInput | undefined;
    address?: StringFieldUpdateOperationsInput | undefined;
    image?: StringFieldUpdateOperationsInput | undefined;
    gender?: StringFieldUpdateOperationsInput | undefined;
    country?: CountryUpdateOneRequiredWithoutProfilesInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
