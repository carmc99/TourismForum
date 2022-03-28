"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biome = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Biome;
(function (Biome) {
    Biome["TUNDRA"] = "TUNDRA";
    Biome["BOSQUE"] = "BOSQUE";
    Biome["PRADERA"] = "PRADERA";
    Biome["CHAPARRAL"] = "CHAPARRAL";
    Biome["DESIERTO"] = "DESIERTO";
    Biome["TAIGA"] = "TAIGA";
    Biome["ESTEPA"] = "ESTEPA";
    Biome["SELVA_TROPICAL"] = "SELVA_TROPICAL";
    Biome["SABANA"] = "SABANA";
    Biome["MANGLAR"] = "MANGLAR";
})(Biome = exports.Biome || (exports.Biome = {}));
TypeGraphQL.registerEnumType(Biome, {
    name: "Biome",
    description: undefined,
});
