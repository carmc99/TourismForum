import { RoleCreateOrConnectWithoutUsersInput } from "../inputs/RoleCreateOrConnectWithoutUsersInput";
import { RoleCreateWithoutUsersInput } from "../inputs/RoleCreateWithoutUsersInput";
import { RoleUpdateWithoutUsersInput } from "../inputs/RoleUpdateWithoutUsersInput";
import { RoleUpsertWithoutUsersInput } from "../inputs/RoleUpsertWithoutUsersInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";
export declare class RoleUpdateOneRequiredWithoutUsersInput {
    create?: RoleCreateWithoutUsersInput | undefined;
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | undefined;
    upsert?: RoleUpsertWithoutUsersInput | undefined;
    connect?: RoleWhereUniqueInput | undefined;
    update?: RoleUpdateWithoutUsersInput | undefined;
}
