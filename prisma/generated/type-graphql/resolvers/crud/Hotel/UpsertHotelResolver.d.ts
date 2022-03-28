import { GraphQLResolveInfo } from "graphql";
import { UpsertHotelArgs } from "./args/UpsertHotelArgs";
import { Hotel } from "../../../models/Hotel";
export declare class UpsertHotelResolver {
    upsertHotel(ctx: any, info: GraphQLResolveInfo, args: UpsertHotelArgs): Promise<Hotel>;
}
