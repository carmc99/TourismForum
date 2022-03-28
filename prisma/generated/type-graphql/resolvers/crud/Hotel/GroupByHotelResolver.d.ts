import { GraphQLResolveInfo } from "graphql";
import { GroupByHotelArgs } from "./args/GroupByHotelArgs";
import { HotelGroupBy } from "../../outputs/HotelGroupBy";
export declare class GroupByHotelResolver {
    groupByHotel(ctx: any, info: GraphQLResolveInfo, args: GroupByHotelArgs): Promise<HotelGroupBy[]>;
}
