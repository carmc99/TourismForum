"use strict";
var NestedEnumBiomeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumBiomeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Biome_1 = require("../../enums/Biome");
let NestedEnumBiomeFilter = NestedEnumBiomeFilter_1 = class NestedEnumBiomeFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Biome_1.Biome, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumBiomeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Biome_1.Biome], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumBiomeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Biome_1.Biome], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumBiomeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBiomeFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBiomeFilter)
], NestedEnumBiomeFilter.prototype, "not", void 0);
NestedEnumBiomeFilter = NestedEnumBiomeFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumBiomeFilter", {
        isAbstract: true
    })
], NestedEnumBiomeFilter);
exports.NestedEnumBiomeFilter = NestedEnumBiomeFilter;
