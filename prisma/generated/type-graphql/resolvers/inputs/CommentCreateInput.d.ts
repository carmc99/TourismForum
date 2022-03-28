import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateInput {
    id?: string | undefined;
    user: UserCreateNestedOneWithoutCommentsInput;
    post: PostCreateNestedOneWithoutCommentsInput;
    description: string;
    score: number;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
