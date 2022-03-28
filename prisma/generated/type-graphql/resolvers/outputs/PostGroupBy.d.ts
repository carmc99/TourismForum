import { PostAvgAggregate } from "../outputs/PostAvgAggregate";
import { PostCountAggregate } from "../outputs/PostCountAggregate";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate";
import { PostMinAggregate } from "../outputs/PostMinAggregate";
import { PostSumAggregate } from "../outputs/PostSumAggregate";
export declare class PostGroupBy {
    id: string;
    userId: string;
    locationId: string;
    biome: "TUNDRA" | "BOSQUE" | "PRADERA" | "CHAPARRAL" | "DESIERTO" | "TAIGA" | "ESTEPA" | "SELVA_TROPICAL" | "SABANA" | "MANGLAR";
    hotelId: string | null;
    title: string;
    description: string;
    image: string;
    average_score: number;
    created_at: Date;
    updated_at: Date;
    _count: PostCountAggregate | null;
    _avg: PostAvgAggregate | null;
    _sum: PostSumAggregate | null;
    _min: PostMinAggregate | null;
    _max: PostMaxAggregate | null;
}
