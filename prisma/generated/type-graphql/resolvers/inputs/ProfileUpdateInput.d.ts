import { CountryUpdateOneRequiredWithoutProfilesInput } from "../inputs/CountryUpdateOneRequiredWithoutProfilesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutProfileInput } from "../inputs/UserUpdateOneRequiredWithoutProfileInput";
export declare class ProfileUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    phone?: StringFieldUpdateOperationsInput | undefined;
    address?: StringFieldUpdateOperationsInput | undefined;
    image?: StringFieldUpdateOperationsInput | undefined;
    gender?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutProfileInput | undefined;
    country?: CountryUpdateOneRequiredWithoutProfilesInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
