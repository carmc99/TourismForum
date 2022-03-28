import { LocationCreateOrConnectWithoutPostsInput } from "../inputs/LocationCreateOrConnectWithoutPostsInput";
import { LocationCreateWithoutPostsInput } from "../inputs/LocationCreateWithoutPostsInput";
import { LocationUpdateWithoutPostsInput } from "../inputs/LocationUpdateWithoutPostsInput";
import { LocationUpsertWithoutPostsInput } from "../inputs/LocationUpsertWithoutPostsInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";
export declare class LocationUpdateOneRequiredWithoutPostsInput {
    create?: LocationCreateWithoutPostsInput | undefined;
    connectOrCreate?: LocationCreateOrConnectWithoutPostsInput | undefined;
    upsert?: LocationUpsertWithoutPostsInput | undefined;
    connect?: LocationWhereUniqueInput | undefined;
    update?: LocationUpdateWithoutPostsInput | undefined;
}
