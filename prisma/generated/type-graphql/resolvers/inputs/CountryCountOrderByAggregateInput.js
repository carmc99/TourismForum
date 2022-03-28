"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CountryCountOrderByAggregateInput = class CountryCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryCountOrderByAggregateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryCountOrderByAggregateInput.prototype, "updated_at", void 0);
CountryCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryCountOrderByAggregateInput", {
        isAbstract: true
    })
], CountryCountOrderByAggregateInput);
exports.CountryCountOrderByAggregateInput = CountryCountOrderByAggregateInput;
