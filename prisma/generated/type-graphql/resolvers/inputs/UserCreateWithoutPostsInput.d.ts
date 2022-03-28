import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { CommentCreateNestedManyWithoutUserInput } from "../inputs/CommentCreateNestedManyWithoutUserInput";
import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";
import { RoleCreateNestedOneWithoutUsersInput } from "../inputs/RoleCreateNestedOneWithoutUsersInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutPostsInput {
    id?: string | undefined;
    name: string;
    email: string;
    emailVerified: Date;
    role: RoleCreateNestedOneWithoutUsersInput;
    profile?: ProfileCreateNestedOneWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    comments?: CommentCreateNestedManyWithoutUserInput | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}