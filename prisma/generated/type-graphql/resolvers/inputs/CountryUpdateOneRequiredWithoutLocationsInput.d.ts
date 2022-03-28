import { CountryCreateOrConnectWithoutLocationsInput } from "../inputs/CountryCreateOrConnectWithoutLocationsInput";
import { CountryCreateWithoutLocationsInput } from "../inputs/CountryCreateWithoutLocationsInput";
import { CountryUpdateWithoutLocationsInput } from "../inputs/CountryUpdateWithoutLocationsInput";
import { CountryUpsertWithoutLocationsInput } from "../inputs/CountryUpsertWithoutLocationsInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";
export declare class CountryUpdateOneRequiredWithoutLocationsInput {
    create?: CountryCreateWithoutLocationsInput | undefined;
    connectOrCreate?: CountryCreateOrConnectWithoutLocationsInput | undefined;
    upsert?: CountryUpsertWithoutLocationsInput | undefined;
    connect?: CountryWhereUniqueInput | undefined;
    update?: CountryUpdateWithoutLocationsInput | undefined;
}
