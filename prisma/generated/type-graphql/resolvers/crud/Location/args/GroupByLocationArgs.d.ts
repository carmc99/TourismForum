import { LocationOrderByWithAggregationInput } from "../../../inputs/LocationOrderByWithAggregationInput";
import { LocationScalarWhereWithAggregatesInput } from "../../../inputs/LocationScalarWhereWithAggregatesInput";
import { LocationWhereInput } from "../../../inputs/LocationWhereInput";
export declare class GroupByLocationArgs {
    where?: LocationWhereInput | undefined;
    orderBy?: LocationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "countryId" | "created_at" | "updated_at">;
    having?: LocationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
