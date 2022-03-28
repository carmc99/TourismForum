import { UserCreateNestedOneWithoutAccountsInput } from "../inputs/UserCreateNestedOneWithoutAccountsInput";
export declare class AccountCreateInput {
    id?: string | undefined;
    user: UserCreateNestedOneWithoutAccountsInput;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token: string;
    access_token: string;
    expires_at: number;
    token_type: string;
    scope: string;
    id_token: string;
    session_state: string;
    oauth_token_secret: string;
    oauth_token: string;
}
