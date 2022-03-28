import { CommentCreateNestedManyWithoutPostInput } from "../inputs/CommentCreateNestedManyWithoutPostInput";
import { LocationCreateNestedOneWithoutPostsInput } from "../inputs/LocationCreateNestedOneWithoutPostsInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateWithoutHotelInput {
    id?: string | undefined;
    author: UserCreateNestedOneWithoutPostsInput;
    location: LocationCreateNestedOneWithoutPostsInput;
    biome: "TUNDRA" | "BOSQUE" | "PRADERA" | "CHAPARRAL" | "DESIERTO" | "TAIGA" | "ESTEPA" | "SELVA_TROPICAL" | "SABANA" | "MANGLAR";
    title: string;
    description: string;
    image: string;
    average_score: number;
    comments?: CommentCreateNestedManyWithoutPostInput | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
