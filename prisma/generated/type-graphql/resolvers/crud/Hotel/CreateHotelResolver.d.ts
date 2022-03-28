import { GraphQLResolveInfo } from "graphql";
import { CreateHotelArgs } from "./args/CreateHotelArgs";
import { Hotel } from "../../../models/Hotel";
export declare class CreateHotelResolver {
    createHotel(ctx: any, info: GraphQLResolveInfo, args: CreateHotelArgs): Promise<Hotel>;
}
