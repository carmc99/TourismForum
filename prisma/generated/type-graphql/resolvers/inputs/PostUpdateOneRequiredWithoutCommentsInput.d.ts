import { PostCreateOrConnectWithoutCommentsInput } from "../inputs/PostCreateOrConnectWithoutCommentsInput";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostUpdateWithoutCommentsInput } from "../inputs/PostUpdateWithoutCommentsInput";
import { PostUpsertWithoutCommentsInput } from "../inputs/PostUpsertWithoutCommentsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateOneRequiredWithoutCommentsInput {
    create?: PostCreateWithoutCommentsInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput | undefined;
    upsert?: PostUpsertWithoutCommentsInput | undefined;
    connect?: PostWhereUniqueInput | undefined;
    update?: PostUpdateWithoutCommentsInput | undefined;
}
