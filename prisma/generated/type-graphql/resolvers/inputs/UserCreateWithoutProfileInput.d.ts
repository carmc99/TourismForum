import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { CommentCreateNestedManyWithoutUserInput } from "../inputs/CommentCreateNestedManyWithoutUserInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { RoleCreateNestedOneWithoutUsersInput } from "../inputs/RoleCreateNestedOneWithoutUsersInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutProfileInput {
    id?: string | undefined;
    name: string;
    email: string;
    emailVerified: Date;
    role: RoleCreateNestedOneWithoutUsersInput;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
    comments?: CommentCreateNestedManyWithoutUserInput | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
