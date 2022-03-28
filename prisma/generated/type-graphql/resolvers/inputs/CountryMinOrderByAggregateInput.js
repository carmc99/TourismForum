"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CountryMinOrderByAggregateInput = class CountryMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryMinOrderByAggregateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryMinOrderByAggregateInput.prototype, "updated_at", void 0);
CountryMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryMinOrderByAggregateInput", {
        isAbstract: true
    })
], CountryMinOrderByAggregateInput);
exports.CountryMinOrderByAggregateInput = CountryMinOrderByAggregateInput;
