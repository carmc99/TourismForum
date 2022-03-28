import { PostOrderByWithRelationInput } from "../inputs/PostOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class CommentOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    postId?: "asc" | "desc" | undefined;
    post?: PostOrderByWithRelationInput | undefined;
    description?: "asc" | "desc" | undefined;
    score?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
}
