import { GraphQLResolveInfo } from "graphql";
import { CreateManyHotelArgs } from "./args/CreateManyHotelArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyHotelResolver {
    createManyHotel(ctx: any, info: GraphQLResolveInfo, args: CreateManyHotelArgs): Promise<AffectedRowsOutput>;
}
