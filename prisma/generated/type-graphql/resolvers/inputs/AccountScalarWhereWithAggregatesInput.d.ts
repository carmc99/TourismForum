import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AccountScalarWhereWithAggregatesInput {
    AND?: AccountScalarWhereWithAggregatesInput[] | undefined;
    OR?: AccountScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AccountScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    type?: StringWithAggregatesFilter | undefined;
    provider?: StringWithAggregatesFilter | undefined;
    providerAccountId?: StringWithAggregatesFilter | undefined;
    refresh_token?: StringWithAggregatesFilter | undefined;
    access_token?: StringWithAggregatesFilter | undefined;
    expires_at?: IntWithAggregatesFilter | undefined;
    token_type?: StringWithAggregatesFilter | undefined;
    scope?: StringWithAggregatesFilter | undefined;
    id_token?: StringWithAggregatesFilter | undefined;
    session_state?: StringWithAggregatesFilter | undefined;
    oauth_token_secret?: StringWithAggregatesFilter | undefined;
    oauth_token?: StringWithAggregatesFilter | undefined;
}
