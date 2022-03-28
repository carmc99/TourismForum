import { HotelCreateOrConnectWithoutPostsInput } from "../inputs/HotelCreateOrConnectWithoutPostsInput";
import { HotelCreateWithoutPostsInput } from "../inputs/HotelCreateWithoutPostsInput";
import { HotelUpdateWithoutPostsInput } from "../inputs/HotelUpdateWithoutPostsInput";
import { HotelUpsertWithoutPostsInput } from "../inputs/HotelUpsertWithoutPostsInput";
import { HotelWhereUniqueInput } from "../inputs/HotelWhereUniqueInput";
export declare class HotelUpdateOneWithoutPostsInput {
    create?: HotelCreateWithoutPostsInput | undefined;
    connectOrCreate?: HotelCreateOrConnectWithoutPostsInput | undefined;
    upsert?: HotelUpsertWithoutPostsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: HotelWhereUniqueInput | undefined;
    update?: HotelUpdateWithoutPostsInput | undefined;
}
