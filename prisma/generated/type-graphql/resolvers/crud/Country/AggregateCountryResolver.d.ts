import { GraphQLResolveInfo } from "graphql";
import { AggregateCountryArgs } from "./args/AggregateCountryArgs";
import { AggregateCountry } from "../../outputs/AggregateCountry";
export declare class AggregateCountryResolver {
    aggregateCountry(ctx: any, info: GraphQLResolveInfo, args: AggregateCountryArgs): Promise<AggregateCountry>;
}
