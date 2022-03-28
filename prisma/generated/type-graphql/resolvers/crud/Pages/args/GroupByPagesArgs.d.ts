import { PagesOrderByWithAggregationInput } from "../../../inputs/PagesOrderByWithAggregationInput";
import { PagesScalarWhereWithAggregatesInput } from "../../../inputs/PagesScalarWhereWithAggregatesInput";
import { PagesWhereInput } from "../../../inputs/PagesWhereInput";
export declare class GroupByPagesArgs {
    where?: PagesWhereInput | undefined;
    orderBy?: PagesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "path" | "created_at" | "updated_at">;
    having?: PagesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
