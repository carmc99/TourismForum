import { Post } from "../models/Post";
import { HotelCount } from "../resolvers/outputs/HotelCount";
export declare class Hotel {
    id: string;
    name: string;
    price_per_night: number;
    lunch_included: boolean;
    image: string;
    posts?: Post[];
    created_at: Date;
    updated_at: Date;
    _count?: HotelCount | null;
}
