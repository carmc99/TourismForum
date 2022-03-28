import { GraphQLResolveInfo } from "graphql";
import { UpdateHotelArgs } from "./args/UpdateHotelArgs";
import { Hotel } from "../../../models/Hotel";
export declare class UpdateHotelResolver {
    updateHotel(ctx: any, info: GraphQLResolveInfo, args: UpdateHotelArgs): Promise<Hotel | null>;
}
