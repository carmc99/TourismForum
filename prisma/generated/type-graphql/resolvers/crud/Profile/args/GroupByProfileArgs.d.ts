import { ProfileOrderByWithAggregationInput } from "../../../inputs/ProfileOrderByWithAggregationInput";
import { ProfileScalarWhereWithAggregatesInput } from "../../../inputs/ProfileScalarWhereWithAggregatesInput";
import { ProfileWhereInput } from "../../../inputs/ProfileWhereInput";
export declare class GroupByProfileArgs {
    where?: ProfileWhereInput | undefined;
    orderBy?: ProfileOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "phone" | "address" | "image" | "gender" | "countryId" | "userId" | "created_at" | "updated_at">;
    having?: ProfileScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
