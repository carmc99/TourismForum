import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LocationUpdateManyWithoutCountryInput } from "../inputs/LocationUpdateManyWithoutCountryInput";
import { ProfileUpdateManyWithoutCountryInput } from "../inputs/ProfileUpdateManyWithoutCountryInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CountryUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    profiles?: ProfileUpdateManyWithoutCountryInput | undefined;
    locations?: LocationUpdateManyWithoutCountryInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
