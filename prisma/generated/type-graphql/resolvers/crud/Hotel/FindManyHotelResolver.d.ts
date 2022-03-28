import { GraphQLResolveInfo } from "graphql";
import { FindManyHotelArgs } from "./args/FindManyHotelArgs";
import { Hotel } from "../../../models/Hotel";
export declare class FindManyHotelResolver {
    hotels(ctx: any, info: GraphQLResolveInfo, args: FindManyHotelArgs): Promise<Hotel[]>;
}
