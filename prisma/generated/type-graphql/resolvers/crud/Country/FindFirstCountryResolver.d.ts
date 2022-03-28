import { GraphQLResolveInfo } from "graphql";
import { FindFirstCountryArgs } from "./args/FindFirstCountryArgs";
import { Country } from "../../../models/Country";
export declare class FindFirstCountryResolver {
    findFirstCountry(ctx: any, info: GraphQLResolveInfo, args: FindFirstCountryArgs): Promise<Country | null>;
}
