import { CountryOrderByWithAggregationInput } from "../../../inputs/CountryOrderByWithAggregationInput";
import { CountryScalarWhereWithAggregatesInput } from "../../../inputs/CountryScalarWhereWithAggregatesInput";
import { CountryWhereInput } from "../../../inputs/CountryWhereInput";
export declare class GroupByCountryArgs {
    where?: CountryWhereInput | undefined;
    orderBy?: CountryOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "created_at" | "updated_at">;
    having?: CountryScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
