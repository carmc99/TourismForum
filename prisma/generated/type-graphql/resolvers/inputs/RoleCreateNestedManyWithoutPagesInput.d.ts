import { RoleCreateOrConnectWithoutPagesInput } from "../inputs/RoleCreateOrConnectWithoutPagesInput";
import { RoleCreateWithoutPagesInput } from "../inputs/RoleCreateWithoutPagesInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";
export declare class RoleCreateNestedManyWithoutPagesInput {
    create?: RoleCreateWithoutPagesInput[] | undefined;
    connectOrCreate?: RoleCreateOrConnectWithoutPagesInput[] | undefined;
    connect?: RoleWhereUniqueInput[] | undefined;
}
