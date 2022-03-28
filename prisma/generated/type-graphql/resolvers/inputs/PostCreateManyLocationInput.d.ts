export declare class PostCreateManyLocationInput {
    id?: string | undefined;
    userId: string;
    biome: "TUNDRA" | "BOSQUE" | "PRADERA" | "CHAPARRAL" | "DESIERTO" | "TAIGA" | "ESTEPA" | "SELVA_TROPICAL" | "SABANA" | "MANGLAR";
    hotelId?: string | undefined;
    title: string;
    description: string;
    image: string;
    average_score: number;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
