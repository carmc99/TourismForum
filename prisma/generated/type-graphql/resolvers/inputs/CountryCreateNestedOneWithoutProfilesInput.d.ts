import { CountryCreateOrConnectWithoutProfilesInput } from "../inputs/CountryCreateOrConnectWithoutProfilesInput";
import { CountryCreateWithoutProfilesInput } from "../inputs/CountryCreateWithoutProfilesInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";
export declare class CountryCreateNestedOneWithoutProfilesInput {
    create?: CountryCreateWithoutProfilesInput | undefined;
    connectOrCreate?: CountryCreateOrConnectWithoutProfilesInput | undefined;
    connect?: CountryWhereUniqueInput | undefined;
}
