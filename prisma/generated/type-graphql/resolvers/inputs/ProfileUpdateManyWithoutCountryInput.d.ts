import { ProfileCreateManyCountryInputEnvelope } from "../inputs/ProfileCreateManyCountryInputEnvelope";
import { ProfileCreateOrConnectWithoutCountryInput } from "../inputs/ProfileCreateOrConnectWithoutCountryInput";
import { ProfileCreateWithoutCountryInput } from "../inputs/ProfileCreateWithoutCountryInput";
import { ProfileScalarWhereInput } from "../inputs/ProfileScalarWhereInput";
import { ProfileUpdateManyWithWhereWithoutCountryInput } from "../inputs/ProfileUpdateManyWithWhereWithoutCountryInput";
import { ProfileUpdateWithWhereUniqueWithoutCountryInput } from "../inputs/ProfileUpdateWithWhereUniqueWithoutCountryInput";
import { ProfileUpsertWithWhereUniqueWithoutCountryInput } from "../inputs/ProfileUpsertWithWhereUniqueWithoutCountryInput";
import { ProfileWhereUniqueInput } from "../inputs/ProfileWhereUniqueInput";
export declare class ProfileUpdateManyWithoutCountryInput {
    create?: ProfileCreateWithoutCountryInput[] | undefined;
    connectOrCreate?: ProfileCreateOrConnectWithoutCountryInput[] | undefined;
    upsert?: ProfileUpsertWithWhereUniqueWithoutCountryInput[] | undefined;
    createMany?: ProfileCreateManyCountryInputEnvelope | undefined;
    set?: ProfileWhereUniqueInput[] | undefined;
    disconnect?: ProfileWhereUniqueInput[] | undefined;
    delete?: ProfileWhereUniqueInput[] | undefined;
    connect?: ProfileWhereUniqueInput[] | undefined;
    update?: ProfileUpdateWithWhereUniqueWithoutCountryInput[] | undefined;
    updateMany?: ProfileUpdateManyWithWhereWithoutCountryInput[] | undefined;
    deleteMany?: ProfileScalarWhereInput[] | undefined;
}
