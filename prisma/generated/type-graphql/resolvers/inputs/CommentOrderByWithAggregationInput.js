"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentAvgOrderByAggregateInput_1 = require("../inputs/CommentAvgOrderByAggregateInput");
const CommentCountOrderByAggregateInput_1 = require("../inputs/CommentCountOrderByAggregateInput");
const CommentMaxOrderByAggregateInput_1 = require("../inputs/CommentMaxOrderByAggregateInput");
const CommentMinOrderByAggregateInput_1 = require("../inputs/CommentMinOrderByAggregateInput");
const CommentSumOrderByAggregateInput_1 = require("../inputs/CommentSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CommentOrderByWithAggregationInput = class CommentOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithAggregationInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithAggregationInput.prototype, "score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCountOrderByAggregateInput_1.CommentCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCountOrderByAggregateInput_1.CommentCountOrderByAggregateInput)
], CommentOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentAvgOrderByAggregateInput_1.CommentAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentAvgOrderByAggregateInput_1.CommentAvgOrderByAggregateInput)
], CommentOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentMaxOrderByAggregateInput_1.CommentMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentMaxOrderByAggregateInput_1.CommentMaxOrderByAggregateInput)
], CommentOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentMinOrderByAggregateInput_1.CommentMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentMinOrderByAggregateInput_1.CommentMinOrderByAggregateInput)
], CommentOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentSumOrderByAggregateInput_1.CommentSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentSumOrderByAggregateInput_1.CommentSumOrderByAggregateInput)
], CommentOrderByWithAggregationInput.prototype, "_sum", void 0);
CommentOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentOrderByWithAggregationInput", {
        isAbstract: true
    })
], CommentOrderByWithAggregationInput);
exports.CommentOrderByWithAggregationInput = CommentOrderByWithAggregationInput;
