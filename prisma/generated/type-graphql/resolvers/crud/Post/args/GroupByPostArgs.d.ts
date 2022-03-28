import { PostOrderByWithAggregationInput } from "../../../inputs/PostOrderByWithAggregationInput";
import { PostScalarWhereWithAggregatesInput } from "../../../inputs/PostScalarWhereWithAggregatesInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
export declare class GroupByPostArgs {
    where?: PostWhereInput | undefined;
    orderBy?: PostOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "userId" | "locationId" | "biome" | "hotelId" | "title" | "description" | "image" | "average_score" | "created_at" | "updated_at">;
    having?: PostScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
