import { AccountAvgAggregate } from "../outputs/AccountAvgAggregate";
import { AccountCountAggregate } from "../outputs/AccountCountAggregate";
import { AccountMaxAggregate } from "../outputs/AccountMaxAggregate";
import { AccountMinAggregate } from "../outputs/AccountMinAggregate";
import { AccountSumAggregate } from "../outputs/AccountSumAggregate";
export declare class AccountGroupBy {
    id: string;
    userId: string;
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
    _count: AccountCountAggregate | null;
    _avg: AccountAvgAggregate | null;
    _sum: AccountSumAggregate | null;
    _min: AccountMinAggregate | null;
    _max: AccountMaxAggregate | null;
}
