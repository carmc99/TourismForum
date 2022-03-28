import { LocationCreateOrConnectWithoutPostsInput } from "../inputs/LocationCreateOrConnectWithoutPostsInput";
import { LocationCreateWithoutPostsInput } from "../inputs/LocationCreateWithoutPostsInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";
export declare class LocationCreateNestedOneWithoutPostsInput {
    create?: LocationCreateWithoutPostsInput | undefined;
    connectOrCreate?: LocationCreateOrConnectWithoutPostsInput | undefined;
    connect?: LocationWhereUniqueInput | undefined;
}
