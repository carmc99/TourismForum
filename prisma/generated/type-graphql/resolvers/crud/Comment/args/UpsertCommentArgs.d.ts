import { CommentCreateInput } from "../../../inputs/CommentCreateInput";
import { CommentUpdateInput } from "../../../inputs/CommentUpdateInput";
import { CommentWhereUniqueInput } from "../../../inputs/CommentWhereUniqueInput";
export declare class UpsertCommentArgs {
    where: CommentWhereUniqueInput;
    create: CommentCreateInput;
    update: CommentUpdateInput;
}
