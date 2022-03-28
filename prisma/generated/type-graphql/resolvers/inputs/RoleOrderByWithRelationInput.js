"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesOrderByRelationAggregateInput_1 = require("../inputs/PagesOrderByRelationAggregateInput");
const UserOrderByRelationAggregateInput_1 = require("../inputs/UserOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RoleOrderByWithRelationInput = class RoleOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput)
], RoleOrderByWithRelationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesOrderByRelationAggregateInput_1.PagesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesOrderByRelationAggregateInput_1.PagesOrderByRelationAggregateInput)
], RoleOrderByWithRelationInput.prototype, "pages", void 0);
RoleOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleOrderByWithRelationInput", {
        isAbstract: true
    })
], RoleOrderByWithRelationInput);
exports.RoleOrderByWithRelationInput = RoleOrderByWithRelationInput;
