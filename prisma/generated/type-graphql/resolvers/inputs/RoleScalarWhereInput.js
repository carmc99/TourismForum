"use strict";
var RoleScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
let RoleScalarWhereInput = RoleScalarWhereInput_1 = class RoleScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], RoleScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], RoleScalarWhereInput.prototype, "name", void 0);
RoleScalarWhereInput = RoleScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleScalarWhereInput", {
        isAbstract: true
    })
], RoleScalarWhereInput);
exports.RoleScalarWhereInput = RoleScalarWhereInput;
