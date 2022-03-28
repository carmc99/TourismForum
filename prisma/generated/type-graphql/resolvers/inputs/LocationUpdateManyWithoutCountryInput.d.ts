import { LocationCreateManyCountryInputEnvelope } from "../inputs/LocationCreateManyCountryInputEnvelope";
import { LocationCreateOrConnectWithoutCountryInput } from "../inputs/LocationCreateOrConnectWithoutCountryInput";
import { LocationCreateWithoutCountryInput } from "../inputs/LocationCreateWithoutCountryInput";
import { LocationScalarWhereInput } from "../inputs/LocationScalarWhereInput";
import { LocationUpdateManyWithWhereWithoutCountryInput } from "../inputs/LocationUpdateManyWithWhereWithoutCountryInput";
import { LocationUpdateWithWhereUniqueWithoutCountryInput } from "../inputs/LocationUpdateWithWhereUniqueWithoutCountryInput";
import { LocationUpsertWithWhereUniqueWithoutCountryInput } from "../inputs/LocationUpsertWithWhereUniqueWithoutCountryInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";
export declare class LocationUpdateManyWithoutCountryInput {
    create?: LocationCreateWithoutCountryInput[] | undefined;
    connectOrCreate?: LocationCreateOrConnectWithoutCountryInput[] | undefined;
    upsert?: LocationUpsertWithWhereUniqueWithoutCountryInput[] | undefined;
    createMany?: LocationCreateManyCountryInputEnvelope | undefined;
    set?: LocationWhereUniqueInput[] | undefined;
    disconnect?: LocationWhereUniqueInput[] | undefined;
    delete?: LocationWhereUniqueInput[] | undefined;
    connect?: LocationWhereUniqueInput[] | undefined;
    update?: LocationUpdateWithWhereUniqueWithoutCountryInput[] | undefined;
    updateMany?: LocationUpdateManyWithWhereWithoutCountryInput[] | undefined;
    deleteMany?: LocationScalarWhereInput[] | undefined;
}
