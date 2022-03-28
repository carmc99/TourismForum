import { GraphQLResolveInfo } from "graphql";
import { CreateCountryArgs } from "./args/CreateCountryArgs";
import { Country } from "../../../models/Country";
export declare class CreateCountryResolver {
    createCountry(ctx: any, info: GraphQLResolveInfo, args: CreateCountryArgs): Promise<Country>;
}
