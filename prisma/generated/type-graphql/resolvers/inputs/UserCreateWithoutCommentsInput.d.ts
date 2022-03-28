import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";
import { RoleCreateNestedOneWithoutUsersInput } from "../inputs/RoleCreateNestedOneWithoutUsersInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutCommentsInput {
    id?: string | undefined;
    name: string;
    email: string;
    emailVerified: Date;
    role: RoleCreateNestedOneWithoutUsersInput;
    profile?: ProfileCreateNestedOneWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
