import { Country } from "../../../models/Country";
import { Location } from "../../../models/Location";
import { Post } from "../../../models/Post";
import { LocationPostsArgs } from "./args/LocationPostsArgs";
export declare class LocationRelationsResolver {
    posts(location: Location, ctx: any, args: LocationPostsArgs): Promise<Post[]>;
    country(location: Location, ctx: any): Promise<Country>;
}
