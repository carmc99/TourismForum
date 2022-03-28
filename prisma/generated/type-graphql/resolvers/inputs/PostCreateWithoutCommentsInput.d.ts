import { HotelCreateNestedOneWithoutPostsInput } from "../inputs/HotelCreateNestedOneWithoutPostsInput";
import { LocationCreateNestedOneWithoutPostsInput } from "../inputs/LocationCreateNestedOneWithoutPostsInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateWithoutCommentsInput {
    id?: string | undefined;
    author: UserCreateNestedOneWithoutPostsInput;
    location: LocationCreateNestedOneWithoutPostsInput;
    biome: "TUNDRA" | "BOSQUE" | "PRADERA" | "CHAPARRAL" | "DESIERTO" | "TAIGA" | "ESTEPA" | "SELVA_TROPICAL" | "SABANA" | "MANGLAR";
    hotel?: HotelCreateNestedOneWithoutPostsInput | undefined;
    title: string;
    description: string;
    image: string;
    average_score: number;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
