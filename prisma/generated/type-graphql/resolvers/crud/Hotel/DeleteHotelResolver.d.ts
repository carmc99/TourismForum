import { GraphQLResolveInfo } from "graphql";
import { DeleteHotelArgs } from "./args/DeleteHotelArgs";
import { Hotel } from "../../../models/Hotel";
export declare class DeleteHotelResolver {
    deleteHotel(ctx: any, info: GraphQLResolveInfo, args: DeleteHotelArgs): Promise<Hotel | null>;
}
