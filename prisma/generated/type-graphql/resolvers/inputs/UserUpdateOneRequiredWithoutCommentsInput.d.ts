import { UserCreateOrConnectWithoutCommentsInput } from "../inputs/UserCreateOrConnectWithoutCommentsInput";
import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserUpdateWithoutCommentsInput } from "../inputs/UserUpdateWithoutCommentsInput";
import { UserUpsertWithoutCommentsInput } from "../inputs/UserUpsertWithoutCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutCommentsInput {
    create?: UserCreateWithoutCommentsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput | undefined;
    upsert?: UserUpsertWithoutCommentsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutCommentsInput | undefined;
}
