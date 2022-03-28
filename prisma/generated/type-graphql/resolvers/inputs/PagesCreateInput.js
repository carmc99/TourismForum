"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateNestedManyWithoutPagesInput_1 = require("../inputs/RoleCreateNestedManyWithoutPagesInput");
let PagesCreateInput = class PagesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PagesCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PagesCreateInput.prototype, "path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateNestedManyWithoutPagesInput_1.RoleCreateNestedManyWithoutPagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCreateNestedManyWithoutPagesInput_1.RoleCreateNestedManyWithoutPagesInput)
], PagesCreateInput.prototype, "roles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PagesCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PagesCreateInput.prototype, "updated_at", void 0);
PagesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesCreateInput", {
        isAbstract: true
    })
], PagesCreateInput);
exports.PagesCreateInput = PagesCreateInput;
