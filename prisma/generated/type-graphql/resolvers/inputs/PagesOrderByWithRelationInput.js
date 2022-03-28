"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleOrderByRelationAggregateInput_1 = require("../inputs/RoleOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PagesOrderByWithRelationInput = class PagesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithRelationInput.prototype, "path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleOrderByRelationAggregateInput_1.RoleOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleOrderByRelationAggregateInput_1.RoleOrderByRelationAggregateInput)
], PagesOrderByWithRelationInput.prototype, "roles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithRelationInput.prototype, "updated_at", void 0);
PagesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesOrderByWithRelationInput", {
        isAbstract: true
    })
], PagesOrderByWithRelationInput);
exports.PagesOrderByWithRelationInput = PagesOrderByWithRelationInput;
