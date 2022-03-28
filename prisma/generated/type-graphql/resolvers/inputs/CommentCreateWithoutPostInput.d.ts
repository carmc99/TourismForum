import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutPostInput {
    id?: string | undefined;
    user: UserCreateNestedOneWithoutCommentsInput;
    description: string;
    score: number;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
