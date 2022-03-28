import { PostCreateManyLocationInputEnvelope } from "../inputs/PostCreateManyLocationInputEnvelope";
import { PostCreateOrConnectWithoutLocationInput } from "../inputs/PostCreateOrConnectWithoutLocationInput";
import { PostCreateWithoutLocationInput } from "../inputs/PostCreateWithoutLocationInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedManyWithoutLocationInput {
    create?: PostCreateWithoutLocationInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutLocationInput[] | undefined;
    createMany?: PostCreateManyLocationInputEnvelope | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
}
