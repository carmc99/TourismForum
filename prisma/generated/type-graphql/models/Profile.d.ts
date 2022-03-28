import { Country } from "../models/Country";
import { User } from "../models/User";
export declare class Profile {
    id: string;
    phone: string;
    address: string;
    image: string;
    gender: string;
    countryId: string;
    userId: string;
    user?: User;
    country?: Country;
    created_at: Date;
    updated_at: Date;
}
