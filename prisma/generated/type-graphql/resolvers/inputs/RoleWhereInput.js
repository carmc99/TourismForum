"use strict";
var RoleWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesListRelationFilter_1 = require("../inputs/PagesListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserListRelationFilter_1 = require("../inputs/UserListRelationFilter");
let RoleWhereInput = RoleWhereInput_1 = class RoleWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], RoleWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], RoleWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserListRelationFilter_1.UserListRelationFilter)
], RoleWhereInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesListRelationFilter_1.PagesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesListRelationFilter_1.PagesListRelationFilter)
], RoleWhereInput.prototype, "pages", void 0);
RoleWhereInput = RoleWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleWhereInput", {
        isAbstract: true
    })
], RoleWhereInput);
exports.RoleWhereInput = RoleWhereInput;
