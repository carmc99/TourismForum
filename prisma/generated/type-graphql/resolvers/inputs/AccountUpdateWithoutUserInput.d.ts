import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AccountUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    provider?: StringFieldUpdateOperationsInput | undefined;
    providerAccountId?: StringFieldUpdateOperationsInput | undefined;
    refresh_token?: StringFieldUpdateOperationsInput | undefined;
    access_token?: StringFieldUpdateOperationsInput | undefined;
    expires_at?: IntFieldUpdateOperationsInput | undefined;
    token_type?: StringFieldUpdateOperationsInput | undefined;
    scope?: StringFieldUpdateOperationsInput | undefined;
    id_token?: StringFieldUpdateOperationsInput | undefined;
    session_state?: StringFieldUpdateOperationsInput | undefined;
    oauth_token_secret?: StringFieldUpdateOperationsInput | undefined;
    oauth_token?: StringFieldUpdateOperationsInput | undefined;
}
