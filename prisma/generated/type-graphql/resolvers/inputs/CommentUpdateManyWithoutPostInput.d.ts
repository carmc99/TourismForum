import { CommentCreateManyPostInputEnvelope } from "../inputs/CommentCreateManyPostInputEnvelope";
import { CommentCreateOrConnectWithoutPostInput } from "../inputs/CommentCreateOrConnectWithoutPostInput";
import { CommentCreateWithoutPostInput } from "../inputs/CommentCreateWithoutPostInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutPostInput } from "../inputs/CommentUpdateManyWithWhereWithoutPostInput";
import { CommentUpdateWithWhereUniqueWithoutPostInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutPostInput";
import { CommentUpsertWithWhereUniqueWithoutPostInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutPostInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";
export declare class CommentUpdateManyWithoutPostInput {
    create?: CommentCreateWithoutPostInput[] | undefined;
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput[] | undefined;
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[] | undefined;
    createMany?: CommentCreateManyPostInputEnvelope | undefined;
    set?: CommentWhereUniqueInput[] | undefined;
    disconnect?: CommentWhereUniqueInput[] | undefined;
    delete?: CommentWhereUniqueInput[] | undefined;
    connect?: CommentWhereUniqueInput[] | undefined;
    update?: CommentUpdateWithWhereUniqueWithoutPostInput[] | undefined;
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput[] | undefined;
    deleteMany?: CommentScalarWhereInput[] | undefined;
}
