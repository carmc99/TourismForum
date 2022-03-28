import { RoleCreateOrConnectWithoutUsersInput } from "../inputs/RoleCreateOrConnectWithoutUsersInput";
import { RoleCreateWithoutUsersInput } from "../inputs/RoleCreateWithoutUsersInput";
import { RoleUpdateWithoutUsersInput } from "../inputs/RoleUpdateWithoutUsersInput";
import { RoleUpsertWithoutUsersInput } from "../inputs/RoleUpsertWithoutUsersInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";
export declare class RoleUpdateOneWithoutUsersInput {
    create?: RoleCreateWithoutUsersInput | undefined;
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | undefined;
    upsert?: RoleUpsertWithoutUsersInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: RoleWhereUniqueInput | undefined;
    update?: RoleUpdateWithoutUsersInput | undefined;
}
