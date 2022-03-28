"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesCountOrderByAggregateInput_1 = require("../inputs/PagesCountOrderByAggregateInput");
const PagesMaxOrderByAggregateInput_1 = require("../inputs/PagesMaxOrderByAggregateInput");
const PagesMinOrderByAggregateInput_1 = require("../inputs/PagesMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PagesOrderByWithAggregationInput = class PagesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithAggregationInput.prototype, "path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesCountOrderByAggregateInput_1.PagesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesCountOrderByAggregateInput_1.PagesCountOrderByAggregateInput)
], PagesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesMaxOrderByAggregateInput_1.PagesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesMaxOrderByAggregateInput_1.PagesMaxOrderByAggregateInput)
], PagesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesMinOrderByAggregateInput_1.PagesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesMinOrderByAggregateInput_1.PagesMinOrderByAggregateInput)
], PagesOrderByWithAggregationInput.prototype, "_min", void 0);
PagesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesOrderByWithAggregationInput", {
        isAbstract: true
    })
], PagesOrderByWithAggregationInput);
exports.PagesOrderByWithAggregationInput = PagesOrderByWithAggregationInput;
