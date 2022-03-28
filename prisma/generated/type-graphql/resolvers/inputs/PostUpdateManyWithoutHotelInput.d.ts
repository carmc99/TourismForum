import { PostCreateManyHotelInputEnvelope } from "../inputs/PostCreateManyHotelInputEnvelope";
import { PostCreateOrConnectWithoutHotelInput } from "../inputs/PostCreateOrConnectWithoutHotelInput";
import { PostCreateWithoutHotelInput } from "../inputs/PostCreateWithoutHotelInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutHotelInput } from "../inputs/PostUpdateManyWithWhereWithoutHotelInput";
import { PostUpdateWithWhereUniqueWithoutHotelInput } from "../inputs/PostUpdateWithWhereUniqueWithoutHotelInput";
import { PostUpsertWithWhereUniqueWithoutHotelInput } from "../inputs/PostUpsertWithWhereUniqueWithoutHotelInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateManyWithoutHotelInput {
    create?: PostCreateWithoutHotelInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutHotelInput[] | undefined;
    upsert?: PostUpsertWithWhereUniqueWithoutHotelInput[] | undefined;
    createMany?: PostCreateManyHotelInputEnvelope | undefined;
    set?: PostWhereUniqueInput[] | undefined;
    disconnect?: PostWhereUniqueInput[] | undefined;
    delete?: PostWhereUniqueInput[] | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
    update?: PostUpdateWithWhereUniqueWithoutHotelInput[] | undefined;
    updateMany?: PostUpdateManyWithWhereWithoutHotelInput[] | undefined;
    deleteMany?: PostScalarWhereInput[] | undefined;
}
