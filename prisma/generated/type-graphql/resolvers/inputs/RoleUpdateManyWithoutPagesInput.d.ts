import { RoleCreateOrConnectWithoutPagesInput } from "../inputs/RoleCreateOrConnectWithoutPagesInput";
import { RoleCreateWithoutPagesInput } from "../inputs/RoleCreateWithoutPagesInput";
import { RoleScalarWhereInput } from "../inputs/RoleScalarWhereInput";
import { RoleUpdateManyWithWhereWithoutPagesInput } from "../inputs/RoleUpdateManyWithWhereWithoutPagesInput";
import { RoleUpdateWithWhereUniqueWithoutPagesInput } from "../inputs/RoleUpdateWithWhereUniqueWithoutPagesInput";
import { RoleUpsertWithWhereUniqueWithoutPagesInput } from "../inputs/RoleUpsertWithWhereUniqueWithoutPagesInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";
export declare class RoleUpdateManyWithoutPagesInput {
    create?: RoleCreateWithoutPagesInput[] | undefined;
    connectOrCreate?: RoleCreateOrConnectWithoutPagesInput[] | undefined;
    upsert?: RoleUpsertWithWhereUniqueWithoutPagesInput[] | undefined;
    set?: RoleWhereUniqueInput[] | undefined;
    disconnect?: RoleWhereUniqueInput[] | undefined;
    delete?: RoleWhereUniqueInput[] | undefined;
    connect?: RoleWhereUniqueInput[] | undefined;
    update?: RoleUpdateWithWhereUniqueWithoutPagesInput[] | undefined;
    updateMany?: RoleUpdateManyWithWhereWithoutPagesInput[] | undefined;
    deleteMany?: RoleScalarWhereInput[] | undefined;
}
