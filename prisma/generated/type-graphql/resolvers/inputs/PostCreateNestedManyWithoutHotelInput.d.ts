import { PostCreateManyHotelInputEnvelope } from "../inputs/PostCreateManyHotelInputEnvelope";
import { PostCreateOrConnectWithoutHotelInput } from "../inputs/PostCreateOrConnectWithoutHotelInput";
import { PostCreateWithoutHotelInput } from "../inputs/PostCreateWithoutHotelInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedManyWithoutHotelInput {
    create?: PostCreateWithoutHotelInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutHotelInput[] | undefined;
    createMany?: PostCreateManyHotelInputEnvelope | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
}
