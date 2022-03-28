"use strict";
var PagesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const RoleListRelationFilter_1 = require("../inputs/RoleListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let PagesWhereInput = PagesWhereInput_1 = class PagesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PagesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PagesWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PagesWhereInput.prototype, "path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleListRelationFilter_1.RoleListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleListRelationFilter_1.RoleListRelationFilter)
], PagesWhereInput.prototype, "roles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PagesWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PagesWhereInput.prototype, "updated_at", void 0);
PagesWhereInput = PagesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesWhereInput", {
        isAbstract: true
    })
], PagesWhereInput);
exports.PagesWhereInput = PagesWhereInput;
