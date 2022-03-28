import { PagesOrderByRelationAggregateInput } from "../inputs/PagesOrderByRelationAggregateInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
export declare class RoleOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    users?: UserOrderByRelationAggregateInput | undefined;
    pages?: PagesOrderByRelationAggregateInput | undefined;
}
