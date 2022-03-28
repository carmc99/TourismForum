import { Hotel } from "../../../models/Hotel";
import { Post } from "../../../models/Post";
import { HotelPostsArgs } from "./args/HotelPostsArgs";
export declare class HotelRelationsResolver {
    posts(hotel: Hotel, ctx: any, args: HotelPostsArgs): Promise<Post[]>;
}
