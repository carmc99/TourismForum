export declare class PostCreateManyHotelInput {
    id?: string | undefined;
    userId: string;
    locationId: string;
    biome: "TUNDRA" | "BOSQUE" | "PRADERA" | "CHAPARRAL" | "DESIERTO" | "TAIGA" | "ESTEPA" | "SELVA_TROPICAL" | "SABANA" | "MANGLAR";
    title: string;
    description: string;
    image: string;
    average_score: number;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
