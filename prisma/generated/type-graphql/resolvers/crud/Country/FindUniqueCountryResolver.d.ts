import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCountryArgs } from "./args/FindUniqueCountryArgs";
import { Country } from "../../../models/Country";
export declare class FindUniqueCountryResolver {
    country(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCountryArgs): Promise<Country | null>;
}
