import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
export declare class HotelOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    price_per_night?: "asc" | "desc" | undefined;
    lunch_included?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    posts?: PostOrderByRelationAggregateInput | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
}
