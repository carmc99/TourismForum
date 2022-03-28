import { NestedEnumBiomeFilter } from "../inputs/NestedEnumBiomeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumBiomeWithAggregatesFilter {
    equals?: "TUNDRA" | "BOSQUE" | "PRADERA" | "CHAPARRAL" | "DESIERTO" | "TAIGA" | "ESTEPA" | "SELVA_TROPICAL" | "SABANA" | "MANGLAR" | undefined;
    in?: Array<"TUNDRA" | "BOSQUE" | "PRADERA" | "CHAPARRAL" | "DESIERTO" | "TAIGA" | "ESTEPA" | "SELVA_TROPICAL" | "SABANA" | "MANGLAR"> | undefined;
    notIn?: Array<"TUNDRA" | "BOSQUE" | "PRADERA" | "CHAPARRAL" | "DESIERTO" | "TAIGA" | "ESTEPA" | "SELVA_TROPICAL" | "SABANA" | "MANGLAR"> | undefined;
    not?: NestedEnumBiomeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumBiomeFilter | undefined;
    _max?: NestedEnumBiomeFilter | undefined;
}
