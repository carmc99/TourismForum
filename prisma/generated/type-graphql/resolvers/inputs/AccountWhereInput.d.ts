import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class AccountWhereInput {
    AND?: AccountWhereInput[] | undefined;
    OR?: AccountWhereInput[] | undefined;
    NOT?: AccountWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    type?: StringFilter | undefined;
    provider?: StringFilter | undefined;
    providerAccountId?: StringFilter | undefined;
    refresh_token?: StringFilter | undefined;
    access_token?: StringFilter | undefined;
    expires_at?: IntFilter | undefined;
    token_type?: StringFilter | undefined;
    scope?: StringFilter | undefined;
    id_token?: StringFilter | undefined;
    session_state?: StringFilter | undefined;
    oauth_token_secret?: StringFilter | undefined;
    oauth_token?: StringFilter | undefined;
}
