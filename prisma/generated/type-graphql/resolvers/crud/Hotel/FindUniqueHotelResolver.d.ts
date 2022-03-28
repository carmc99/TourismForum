import { GraphQLResolveInfo } from "graphql";
import { FindUniqueHotelArgs } from "./args/FindUniqueHotelArgs";
import { Hotel } from "../../../models/Hotel";
export declare class FindUniqueHotelResolver {
    hotel(ctx: any, info: GraphQLResolveInfo, args: FindUniqueHotelArgs): Promise<Hotel | null>;
}
