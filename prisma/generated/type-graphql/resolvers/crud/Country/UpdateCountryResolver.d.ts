import { GraphQLResolveInfo } from "graphql";
import { UpdateCountryArgs } from "./args/UpdateCountryArgs";
import { Country } from "../../../models/Country";
export declare class UpdateCountryResolver {
    updateCountry(ctx: any, info: GraphQLResolveInfo, args: UpdateCountryArgs): Promise<Country | null>;
}
