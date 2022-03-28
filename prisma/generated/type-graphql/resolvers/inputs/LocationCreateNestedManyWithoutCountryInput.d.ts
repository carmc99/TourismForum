import { LocationCreateManyCountryInputEnvelope } from "../inputs/LocationCreateManyCountryInputEnvelope";
import { LocationCreateOrConnectWithoutCountryInput } from "../inputs/LocationCreateOrConnectWithoutCountryInput";
import { LocationCreateWithoutCountryInput } from "../inputs/LocationCreateWithoutCountryInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";
export declare class LocationCreateNestedManyWithoutCountryInput {
    create?: LocationCreateWithoutCountryInput[] | undefined;
    connectOrCreate?: LocationCreateOrConnectWithoutCountryInput[] | undefined;
    createMany?: LocationCreateManyCountryInputEnvelope | undefined;
    connect?: LocationWhereUniqueInput[] | undefined;
}
