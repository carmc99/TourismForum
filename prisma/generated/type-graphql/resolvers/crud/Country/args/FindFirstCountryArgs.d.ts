import { CountryOrderByWithRelationInput } from "../../../inputs/CountryOrderByWithRelationInput";
import { CountryWhereInput } from "../../../inputs/CountryWhereInput";
import { CountryWhereUniqueInput } from "../../../inputs/CountryWhereUniqueInput";
export declare class FindFirstCountryArgs {
    where?: CountryWhereInput | undefined;
    orderBy?: CountryOrderByWithRelationInput[] | undefined;
    cursor?: CountryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "created_at" | "updated_at"> | undefined;
}
