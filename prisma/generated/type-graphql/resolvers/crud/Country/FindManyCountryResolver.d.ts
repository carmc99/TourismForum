import { GraphQLResolveInfo } from "graphql";
import { FindManyCountryArgs } from "./args/FindManyCountryArgs";
import { Country } from "../../../models/Country";
export declare class FindManyCountryResolver {
    countries(ctx: any, info: GraphQLResolveInfo, args: FindManyCountryArgs): Promise<Country[]>;
}
