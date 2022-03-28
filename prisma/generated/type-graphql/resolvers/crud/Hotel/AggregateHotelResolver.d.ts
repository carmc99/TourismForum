import { GraphQLResolveInfo } from "graphql";
import { AggregateHotelArgs } from "./args/AggregateHotelArgs";
import { AggregateHotel } from "../../outputs/AggregateHotel";
export declare class AggregateHotelResolver {
    aggregateHotel(ctx: any, info: GraphQLResolveInfo, args: AggregateHotelArgs): Promise<AggregateHotel>;
}
