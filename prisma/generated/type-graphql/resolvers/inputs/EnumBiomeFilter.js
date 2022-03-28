"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumBiomeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumBiomeFilter_1 = require("../inputs/NestedEnumBiomeFilter");
const Biome_1 = require("../../enums/Biome");
let EnumBiomeFilter = class EnumBiomeFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Biome_1.Biome, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumBiomeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Biome_1.Biome], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumBiomeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Biome_1.Biome], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumBiomeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBiomeFilter_1.NestedEnumBiomeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBiomeFilter_1.NestedEnumBiomeFilter)
], EnumBiomeFilter.prototype, "not", void 0);
EnumBiomeFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumBiomeFilter", {
        isAbstract: true
    })
], EnumBiomeFilter);
exports.EnumBiomeFilter = EnumBiomeFilter;
