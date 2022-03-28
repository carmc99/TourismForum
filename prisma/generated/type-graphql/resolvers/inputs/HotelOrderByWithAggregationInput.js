"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelAvgOrderByAggregateInput_1 = require("../inputs/HotelAvgOrderByAggregateInput");
const HotelCountOrderByAggregateInput_1 = require("../inputs/HotelCountOrderByAggregateInput");
const HotelMaxOrderByAggregateInput_1 = require("../inputs/HotelMaxOrderByAggregateInput");
const HotelMinOrderByAggregateInput_1 = require("../inputs/HotelMinOrderByAggregateInput");
const HotelSumOrderByAggregateInput_1 = require("../inputs/HotelSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let HotelOrderByWithAggregationInput = class HotelOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HotelOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HotelOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HotelOrderByWithAggregationInput.prototype, "price_per_night", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HotelOrderByWithAggregationInput.prototype, "lunch_included", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HotelOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HotelOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HotelOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelCountOrderByAggregateInput_1.HotelCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelCountOrderByAggregateInput_1.HotelCountOrderByAggregateInput)
], HotelOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelAvgOrderByAggregateInput_1.HotelAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelAvgOrderByAggregateInput_1.HotelAvgOrderByAggregateInput)
], HotelOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelMaxOrderByAggregateInput_1.HotelMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelMaxOrderByAggregateInput_1.HotelMaxOrderByAggregateInput)
], HotelOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelMinOrderByAggregateInput_1.HotelMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelMinOrderByAggregateInput_1.HotelMinOrderByAggregateInput)
], HotelOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelSumOrderByAggregateInput_1.HotelSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelSumOrderByAggregateInput_1.HotelSumOrderByAggregateInput)
], HotelOrderByWithAggregationInput.prototype, "_sum", void 0);
HotelOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HotelOrderByWithAggregationInput", {
        isAbstract: true
    })
], HotelOrderByWithAggregationInput);
exports.HotelOrderByWithAggregationInput = HotelOrderByWithAggregationInput;
