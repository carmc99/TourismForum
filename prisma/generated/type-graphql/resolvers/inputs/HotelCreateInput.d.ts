import { PostCreateNestedManyWithoutHotelInput } from "../inputs/PostCreateNestedManyWithoutHotelInput";
export declare class HotelCreateInput {
    id?: string | undefined;
    name: string;
    price_per_night: number;
    lunch_included: boolean;
    image: string;
    posts?: PostCreateNestedManyWithoutHotelInput | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
