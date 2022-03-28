"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleWhereInput_1 = require("../inputs/RoleWhereInput");
let RoleListRelationFilter = class RoleListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], RoleListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], RoleListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], RoleListRelationFilter.prototype, "none", void 0);
RoleListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleListRelationFilter", {
        isAbstract: true
    })
], RoleListRelationFilter);
exports.RoleListRelationFilter = RoleListRelationFilter;
