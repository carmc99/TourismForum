import { PagesCreateOrConnectWithoutRolesInput } from "../inputs/PagesCreateOrConnectWithoutRolesInput";
import { PagesCreateWithoutRolesInput } from "../inputs/PagesCreateWithoutRolesInput";
import { PagesWhereUniqueInput } from "../inputs/PagesWhereUniqueInput";
export declare class PagesCreateNestedManyWithoutRolesInput {
    create?: PagesCreateWithoutRolesInput[] | undefined;
    connectOrCreate?: PagesCreateOrConnectWithoutRolesInput[] | undefined;
    connect?: PagesWhereUniqueInput[] | undefined;
}
