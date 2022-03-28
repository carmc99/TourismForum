import { GraphQLResolveInfo } from "graphql";
import { GroupByCountryArgs } from "./args/GroupByCountryArgs";
import { CountryGroupBy } from "../../outputs/CountryGroupBy";
export declare class GroupByCountryResolver {
    groupByCountry(ctx: any, info: GraphQLResolveInfo, args: GroupByCountryArgs): Promise<CountryGroupBy[]>;
}
