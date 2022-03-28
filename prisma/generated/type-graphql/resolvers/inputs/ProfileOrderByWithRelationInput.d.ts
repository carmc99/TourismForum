import { CountryOrderByWithRelationInput } from "../inputs/CountryOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ProfileOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    phone?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    gender?: "asc" | "desc" | undefined;
    countryId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    country?: CountryOrderByWithRelationInput | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
}
