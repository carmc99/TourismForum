import { Comment } from "../models/Comment";
import { Hotel } from "../models/Hotel";
import { Location } from "../models/Location";
import { User } from "../models/User";
import { PostCount } from "../resolvers/outputs/PostCount";
export declare class Post {
    id: string;
    userId: string;
    author?: User;
    locationId: string;
    location?: Location;
    biome: "TUNDRA" | "BOSQUE" | "PRADERA" | "CHAPARRAL" | "DESIERTO" | "TAIGA" | "ESTEPA" | "SELVA_TROPICAL" | "SABANA" | "MANGLAR";
    hotelId?: string | null;
    hotel?: Hotel | null;
    title: string;
    description: string;
    image: string;
    average_score: number;
    comments?: Comment[];
    created_at: Date;
    updated_at: Date;
    _count?: PostCount | null;
}
