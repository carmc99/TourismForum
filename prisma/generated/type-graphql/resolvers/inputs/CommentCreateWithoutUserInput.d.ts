import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutUserInput {
    id?: string | undefined;
    post: PostCreateNestedOneWithoutCommentsInput;
    description: string;
    score: number;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
