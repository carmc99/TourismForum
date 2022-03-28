import { ProfileCreateManyCountryInputEnvelope } from "../inputs/ProfileCreateManyCountryInputEnvelope";
import { ProfileCreateOrConnectWithoutCountryInput } from "../inputs/ProfileCreateOrConnectWithoutCountryInput";
import { ProfileCreateWithoutCountryInput } from "../inputs/ProfileCreateWithoutCountryInput";
import { ProfileWhereUniqueInput } from "../inputs/ProfileWhereUniqueInput";
export declare class ProfileCreateNestedManyWithoutCountryInput {
    create?: ProfileCreateWithoutCountryInput[] | undefined;
    connectOrCreate?: ProfileCreateOrConnectWithoutCountryInput[] | undefined;
    createMany?: ProfileCreateManyCountryInputEnvelope | undefined;
    connect?: ProfileWhereUniqueInput[] | undefined;
}
