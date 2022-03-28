import { GraphQLResolveInfo } from "graphql";
import { CreateManyCountryArgs } from "./args/CreateManyCountryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCountryResolver {
    createManyCountry(ctx: any, info: GraphQLResolveInfo, args: CreateManyCountryArgs): Promise<AffectedRowsOutput>;
}
