import { CountryCreateOrConnectWithoutProfilesInput } from "../inputs/CountryCreateOrConnectWithoutProfilesInput";
import { CountryCreateWithoutProfilesInput } from "../inputs/CountryCreateWithoutProfilesInput";
import { CountryUpdateWithoutProfilesInput } from "../inputs/CountryUpdateWithoutProfilesInput";
import { CountryUpsertWithoutProfilesInput } from "../inputs/CountryUpsertWithoutProfilesInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";
export declare class CountryUpdateOneRequiredWithoutProfilesInput {
    create?: CountryCreateWithoutProfilesInput | undefined;
    connectOrCreate?: CountryCreateOrConnectWithoutProfilesInput | undefined;
    upsert?: CountryUpsertWithoutProfilesInput | undefined;
    connect?: CountryWhereUniqueInput | undefined;
    update?: CountryUpdateWithoutProfilesInput | undefined;
}
