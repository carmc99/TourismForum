"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumBiomeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumBiomeFilter_1 = require("../inputs/NestedEnumBiomeFilter");
const NestedEnumBiomeWithAggregatesFilter_1 = require("../inputs/NestedEnumBiomeWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Biome_1 = require("../../enums/Biome");
let EnumBiomeWithAggregatesFilter = class EnumBiomeWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Biome_1.Biome, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumBiomeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Biome_1.Biome], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumBiomeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Biome_1.Biome], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumBiomeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBiomeWithAggregatesFilter_1.NestedEnumBiomeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBiomeWithAggregatesFilter_1.NestedEnumBiomeWithAggregatesFilter)
], EnumBiomeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumBiomeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBiomeFilter_1.NestedEnumBiomeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBiomeFilter_1.NestedEnumBiomeFilter)
], EnumBiomeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBiomeFilter_1.NestedEnumBiomeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBiomeFilter_1.NestedEnumBiomeFilter)
], EnumBiomeWithAggregatesFilter.prototype, "_max", void 0);
EnumBiomeWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumBiomeWithAggregatesFilter", {
        isAbstract: true
    })
], EnumBiomeWithAggregatesFilter);
exports.EnumBiomeWithAggregatesFilter = EnumBiomeWithAggregatesFilter;
