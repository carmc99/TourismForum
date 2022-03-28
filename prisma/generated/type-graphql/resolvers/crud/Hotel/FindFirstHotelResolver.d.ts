import { GraphQLResolveInfo } from "graphql";
import { FindFirstHotelArgs } from "./args/FindFirstHotelArgs";
import { Hotel } from "../../../models/Hotel";
export declare class FindFirstHotelResolver {
    findFirstHotel(ctx: any, info: GraphQLResolveInfo, args: FindFirstHotelArgs): Promise<Hotel | null>;
}
