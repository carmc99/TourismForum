import { CommentCreateNestedManyWithoutPostInput } from "../inputs/CommentCreateNestedManyWithoutPostInput";
import { HotelCreateNestedOneWithoutPostsInput } from "../inputs/HotelCreateNestedOneWithoutPostsInput";
import { LocationCreateNestedOneWithoutPostsInput } from "../inputs/LocationCreateNestedOneWithoutPostsInput";
export declare class PostCreateWithoutAuthorInput {
    id?: string | undefined;
    location: LocationCreateNestedOneWithoutPostsInput;
    biome: "TUNDRA" | "BOSQUE" | "PRADERA" | "CHAPARRAL" | "DESIERTO" | "TAIGA" | "ESTEPA" | "SELVA_TROPICAL" | "SABANA" | "MANGLAR";
    hotel?: HotelCreateNestedOneWithoutPostsInput | undefined;
    title: string;
    description: string;
    image: string;
    average_score: number;
    comments?: CommentCreateNestedManyWithoutPostInput | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
