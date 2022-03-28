import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCountryArgs } from "./args/DeleteManyCountryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCountryResolver {
    deleteManyCountry(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCountryArgs): Promise<AffectedRowsOutput>;
}
