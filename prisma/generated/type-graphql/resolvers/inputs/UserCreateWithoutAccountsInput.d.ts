import { CommentCreateNestedManyWithoutUserInput } from "../inputs/CommentCreateNestedManyWithoutUserInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";
import { RoleCreateNestedOneWithoutUsersInput } from "../inputs/RoleCreateNestedOneWithoutUsersInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutAccountsInput {
    id?: string | undefined;
    name: string;
    email: string;
    emailVerified: Date;
    role: RoleCreateNestedOneWithoutUsersInput;
    profile?: ProfileCreateNestedOneWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
    comments?: CommentCreateNestedManyWithoutUserInput | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
