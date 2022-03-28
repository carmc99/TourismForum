import { Country } from "../../../models/Country";
import { Location } from "../../../models/Location";
import { Profile } from "../../../models/Profile";
import { CountryLocationsArgs } from "./args/CountryLocationsArgs";
import { CountryProfilesArgs } from "./args/CountryProfilesArgs";
export declare class CountryRelationsResolver {
    profiles(country: Country, ctx: any, args: CountryProfilesArgs): Promise<Profile[]>;
    locations(country: Country, ctx: any, args: CountryLocationsArgs): Promise<Location[]>;
}
