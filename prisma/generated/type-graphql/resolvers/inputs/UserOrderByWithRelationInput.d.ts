import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { ProfileOrderByWithRelationInput } from "../inputs/ProfileOrderByWithRelationInput";
import { RoleOrderByWithRelationInput } from "../inputs/RoleOrderByWithRelationInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    emailVerified?: "asc" | "desc" | undefined;
    role?: RoleOrderByWithRelationInput | undefined;
    roleId?: "asc" | "desc" | undefined;
    profile?: ProfileOrderByWithRelationInput | undefined;
    sessions?: SessionOrderByRelationAggregateInput | undefined;
    accounts?: AccountOrderByRelationAggregateInput | undefined;
    posts?: PostOrderByRelationAggregateInput | undefined;
    comments?: CommentOrderByRelationAggregateInput | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
}
