import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { HotelOrderByWithRelationInput } from "../inputs/HotelOrderByWithRelationInput";
import { LocationOrderByWithRelationInput } from "../inputs/LocationOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class PostOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    author?: UserOrderByWithRelationInput | undefined;
    locationId?: "asc" | "desc" | undefined;
    location?: LocationOrderByWithRelationInput | undefined;
    biome?: "asc" | "desc" | undefined;
    hotelId?: "asc" | "desc" | undefined;
    hotel?: HotelOrderByWithRelationInput | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    average_score?: "asc" | "desc" | undefined;
    comments?: CommentOrderByRelationAggregateInput | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
}
