import { PagesOrderByWithRelationInput } from "../../../inputs/PagesOrderByWithRelationInput";
import { PagesWhereInput } from "../../../inputs/PagesWhereInput";
import { PagesWhereUniqueInput } from "../../../inputs/PagesWhereUniqueInput";
export declare class FindFirstPagesArgs {
    where?: PagesWhereInput | undefined;
    orderBy?: PagesOrderByWithRelationInput[] | undefined;
    cursor?: PagesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "path" | "created_at" | "updated_at"> | undefined;
}
