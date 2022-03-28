import { HotelCreateOrConnectWithoutPostsInput } from "../inputs/HotelCreateOrConnectWithoutPostsInput";
import { HotelCreateWithoutPostsInput } from "../inputs/HotelCreateWithoutPostsInput";
import { HotelWhereUniqueInput } from "../inputs/HotelWhereUniqueInput";
export declare class HotelCreateNestedOneWithoutPostsInput {
    create?: HotelCreateWithoutPostsInput | undefined;
    connectOrCreate?: HotelCreateOrConnectWithoutPostsInput | undefined;
    connect?: HotelWhereUniqueInput | undefined;
}
