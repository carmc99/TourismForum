import { GraphQLResolveInfo } from "graphql";
import { DeleteManyHotelArgs } from "./args/DeleteManyHotelArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyHotelResolver {
    deleteManyHotel(ctx: any, info: GraphQLResolveInfo, args: DeleteManyHotelArgs): Promise<AffectedRowsOutput>;
}
