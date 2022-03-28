"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesCreateWithoutRolesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PagesCreateWithoutRolesInput = class PagesCreateWithoutRolesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesCreateWithoutRolesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PagesCreateWithoutRolesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PagesCreateWithoutRolesInput.prototype, "path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PagesCreateWithoutRolesInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PagesCreateWithoutRolesInput.prototype, "updated_at", void 0);
PagesCreateWithoutRolesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesCreateWithoutRolesInput", {
        isAbstract: true
    })
], PagesCreateWithoutRolesInput);
exports.PagesCreateWithoutRolesInput = PagesCreateWithoutRolesInput;
