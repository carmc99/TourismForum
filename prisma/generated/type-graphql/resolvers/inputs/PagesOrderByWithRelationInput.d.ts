import { RoleOrderByRelationAggregateInput } from "../inputs/RoleOrderByRelationAggregateInput";
export declare class PagesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    path?: "asc" | "desc" | undefined;
    roles?: RoleOrderByRelationAggregateInput | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
}
