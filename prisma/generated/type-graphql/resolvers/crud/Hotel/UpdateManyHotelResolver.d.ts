import { GraphQLResolveInfo } from "graphql";
import { UpdateManyHotelArgs } from "./args/UpdateManyHotelArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyHotelResolver {
    updateManyHotel(ctx: any, info: GraphQLResolveInfo, args: UpdateManyHotelArgs): Promise<AffectedRowsOutput>;
}
