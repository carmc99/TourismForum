import { ProfileOrderByWithRelationInput } from "../../../inputs/ProfileOrderByWithRelationInput";
import { ProfileWhereInput } from "../../../inputs/ProfileWhereInput";
import { ProfileWhereUniqueInput } from "../../../inputs/ProfileWhereUniqueInput";
export declare class FindFirstProfileArgs {
    where?: ProfileWhereInput | undefined;
    orderBy?: ProfileOrderByWithRelationInput[] | undefined;
    cursor?: ProfileWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "phone" | "address" | "image" | "gender" | "countryId" | "userId" | "created_at" | "updated_at"> | undefined;
}
