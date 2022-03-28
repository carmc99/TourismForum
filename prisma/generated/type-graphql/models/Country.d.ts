import { Location } from "../models/Location";
import { Profile } from "../models/Profile";
import { CountryCount } from "../resolvers/outputs/CountryCount";
export declare class Country {
    id: string;
    name: string;
    profiles?: Profile[];
    locations?: Location[];
    created_at: Date;
    updated_at: Date;
    _count?: CountryCount | null;
}
