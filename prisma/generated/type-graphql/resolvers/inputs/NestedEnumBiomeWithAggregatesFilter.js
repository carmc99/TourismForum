"use strict";
var NestedEnumBiomeWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumBiomeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumBiomeFilter_1 = require("../inputs/NestedEnumBiomeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Biome_1 = require("../../enums/Biome");
let NestedEnumBiomeWithAggregatesFilter = NestedEnumBiomeWithAggregatesFilter_1 = class NestedEnumBiomeWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Biome_1.Biome, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumBiomeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Biome_1.Biome], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumBiomeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Biome_1.Biome], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumBiomeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBiomeWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBiomeWithAggregatesFilter)
], NestedEnumBiomeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumBiomeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBiomeFilter_1.NestedEnumBiomeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBiomeFilter_1.NestedEnumBiomeFilter)
], NestedEnumBiomeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBiomeFilter_1.NestedEnumBiomeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBiomeFilter_1.NestedEnumBiomeFilter)
], NestedEnumBiomeWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumBiomeWithAggregatesFilter = NestedEnumBiomeWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumBiomeWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumBiomeWithAggregatesFilter);
exports.NestedEnumBiomeWithAggregatesFilter = NestedEnumBiomeWithAggregatesFilter;
