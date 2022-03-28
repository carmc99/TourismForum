import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCountryArgs } from "./args/UpdateManyCountryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCountryResolver {
    updateManyCountry(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCountryArgs): Promise<AffectedRowsOutput>;
}
