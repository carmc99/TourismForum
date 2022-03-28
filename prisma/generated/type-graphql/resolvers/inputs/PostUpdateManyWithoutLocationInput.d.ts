import { PostCreateManyLocationInputEnvelope } from "../inputs/PostCreateManyLocationInputEnvelope";
import { PostCreateOrConnectWithoutLocationInput } from "../inputs/PostCreateOrConnectWithoutLocationInput";
import { PostCreateWithoutLocationInput } from "../inputs/PostCreateWithoutLocationInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutLocationInput } from "../inputs/PostUpdateManyWithWhereWithoutLocationInput";
import { PostUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/PostUpdateWithWhereUniqueWithoutLocationInput";
import { PostUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/PostUpsertWithWhereUniqueWithoutLocationInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateManyWithoutLocationInput {
    create?: PostCreateWithoutLocationInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutLocationInput[] | undefined;
    upsert?: PostUpsertWithWhereUniqueWithoutLocationInput[] | undefined;
    createMany?: PostCreateManyLocationInputEnvelope | undefined;
    set?: PostWhereUniqueInput[] | undefined;
    disconnect?: PostWhereUniqueInput[] | undefined;
    delete?: PostWhereUniqueInput[] | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
    update?: PostUpdateWithWhereUniqueWithoutLocationInput[] | undefined;
    updateMany?: PostUpdateManyWithWhereWithoutLocationInput[] | undefined;
    deleteMany?: PostScalarWhereInput[] | undefined;
}
