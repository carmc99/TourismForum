import { CountryCreateInput } from "../../../inputs/CountryCreateInput";
import { CountryUpdateInput } from "../../../inputs/CountryUpdateInput";
import { CountryWhereUniqueInput } from "../../../inputs/CountryWhereUniqueInput";
export declare class UpsertCountryArgs {
    where: CountryWhereUniqueInput;
    create: CountryCreateInput;
    update: CountryUpdateInput;
}
