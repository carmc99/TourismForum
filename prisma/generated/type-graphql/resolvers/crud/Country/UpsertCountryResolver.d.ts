import { GraphQLResolveInfo } from "graphql";
import { UpsertCountryArgs } from "./args/UpsertCountryArgs";
import { Country } from "../../../models/Country";
export declare class UpsertCountryResolver {
    upsertCountry(ctx: any, info: GraphQLResolveInfo, args: UpsertCountryArgs): Promise<Country>;
}
