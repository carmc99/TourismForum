"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCountOrderByAggregateInput_1 = require("../inputs/LocationCountOrderByAggregateInput");
const LocationMaxOrderByAggregateInput_1 = require("../inputs/LocationMaxOrderByAggregateInput");
const LocationMinOrderByAggregateInput_1 = require("../inputs/LocationMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LocationOrderByWithAggregationInput = class LocationOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "countryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCountOrderByAggregateInput_1.LocationCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCountOrderByAggregateInput_1.LocationCountOrderByAggregateInput)
], LocationOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationMaxOrderByAggregateInput_1.LocationMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationMaxOrderByAggregateInput_1.LocationMaxOrderByAggregateInput)
], LocationOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationMinOrderByAggregateInput_1.LocationMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationMinOrderByAggregateInput_1.LocationMinOrderByAggregateInput)
], LocationOrderByWithAggregationInput.prototype, "_min", void 0);
LocationOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationOrderByWithAggregationInput", {
        isAbstract: true
    })
], LocationOrderByWithAggregationInput);
exports.LocationOrderByWithAggregationInput = LocationOrderByWithAggregationInput;
