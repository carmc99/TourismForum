"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesCreateNestedManyWithoutRolesInput_1 = require("../inputs/PagesCreateNestedManyWithoutRolesInput");
let RoleCreateWithoutUsersInput = class RoleCreateWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateWithoutUsersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateWithoutUsersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesCreateNestedManyWithoutRolesInput_1.PagesCreateNestedManyWithoutRolesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesCreateNestedManyWithoutRolesInput_1.PagesCreateNestedManyWithoutRolesInput)
], RoleCreateWithoutUsersInput.prototype, "pages", void 0);
RoleCreateWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleCreateWithoutUsersInput", {
        isAbstract: true
    })
], RoleCreateWithoutUsersInput);
exports.RoleCreateWithoutUsersInput = RoleCreateWithoutUsersInput;
