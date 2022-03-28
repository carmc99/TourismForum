import { CountryCreateOrConnectWithoutLocationsInput } from "../inputs/CountryCreateOrConnectWithoutLocationsInput";
import { CountryCreateWithoutLocationsInput } from "../inputs/CountryCreateWithoutLocationsInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";
export declare class CountryCreateNestedOneWithoutLocationsInput {
    create?: CountryCreateWithoutLocationsInput | undefined;
    connectOrCreate?: CountryCreateOrConnectWithoutLocationsInput | undefined;
    connect?: CountryWhereUniqueInput | undefined;
}
