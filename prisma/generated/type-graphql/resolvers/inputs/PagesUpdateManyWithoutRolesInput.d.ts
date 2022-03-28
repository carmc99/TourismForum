import { PagesCreateOrConnectWithoutRolesInput } from "../inputs/PagesCreateOrConnectWithoutRolesInput";
import { PagesCreateWithoutRolesInput } from "../inputs/PagesCreateWithoutRolesInput";
import { PagesScalarWhereInput } from "../inputs/PagesScalarWhereInput";
import { PagesUpdateManyWithWhereWithoutRolesInput } from "../inputs/PagesUpdateManyWithWhereWithoutRolesInput";
import { PagesUpdateWithWhereUniqueWithoutRolesInput } from "../inputs/PagesUpdateWithWhereUniqueWithoutRolesInput";
import { PagesUpsertWithWhereUniqueWithoutRolesInput } from "../inputs/PagesUpsertWithWhereUniqueWithoutRolesInput";
import { PagesWhereUniqueInput } from "../inputs/PagesWhereUniqueInput";
export declare class PagesUpdateManyWithoutRolesInput {
    create?: PagesCreateWithoutRolesInput[] | undefined;
    connectOrCreate?: PagesCreateOrConnectWithoutRolesInput[] | undefined;
    upsert?: PagesUpsertWithWhereUniqueWithoutRolesInput[] | undefined;
    set?: PagesWhereUniqueInput[] | undefined;
    disconnect?: PagesWhereUniqueInput[] | undefined;
    delete?: PagesWhereUniqueInput[] | undefined;
    connect?: PagesWhereUniqueInput[] | undefined;
    update?: PagesUpdateWithWhereUniqueWithoutRolesInput[] | undefined;
    updateMany?: PagesUpdateManyWithWhereWithoutRolesInput[] | undefined;
    deleteMany?: PagesScalarWhereInput[] | undefined;
}
