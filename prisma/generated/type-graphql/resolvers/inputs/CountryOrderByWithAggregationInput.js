"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCountOrderByAggregateInput_1 = require("../inputs/CountryCountOrderByAggregateInput");
const CountryMaxOrderByAggregateInput_1 = require("../inputs/CountryMaxOrderByAggregateInput");
const CountryMinOrderByAggregateInput_1 = require("../inputs/CountryMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CountryOrderByWithAggregationInput = class CountryOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCountOrderByAggregateInput_1.CountryCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryCountOrderByAggregateInput_1.CountryCountOrderByAggregateInput)
], CountryOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryMaxOrderByAggregateInput_1.CountryMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryMaxOrderByAggregateInput_1.CountryMaxOrderByAggregateInput)
], CountryOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryMinOrderByAggregateInput_1.CountryMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryMinOrderByAggregateInput_1.CountryMinOrderByAggregateInput)
], CountryOrderByWithAggregationInput.prototype, "_min", void 0);
CountryOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryOrderByWithAggregationInput", {
        isAbstract: true
    })
], CountryOrderByWithAggregationInput);
exports.CountryOrderByWithAggregationInput = CountryOrderByWithAggregationInput;
