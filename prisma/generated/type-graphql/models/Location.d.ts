import { Country } from "../models/Country";
import { Post } from "../models/Post";
import { LocationCount } from "../resolvers/outputs/LocationCount";
export declare class Location {
    id: string;
    name: string;
    countryId: string;
    posts?: Post[];
    country?: Country;
    created_at: Date;
    updated_at: Date;
    _count?: LocationCount | null;
}
