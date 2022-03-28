import { GraphQLResolveInfo } from "graphql";
import { DeleteCountryArgs } from "./args/DeleteCountryArgs";
import { Country } from "../../../models/Country";
export declare class DeleteCountryResolver {
    deleteCountry(ctx: any, info: GraphQLResolveInfo, args: DeleteCountryArgs): Promise<Country | null>;
}
