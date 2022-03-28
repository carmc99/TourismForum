"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesCreateNestedManyWithoutRolesInput_1 = require("../inputs/PagesCreateNestedManyWithoutRolesInput");
const UserCreateNestedManyWithoutRoleInput_1 = require("../inputs/UserCreateNestedManyWithoutRoleInput");
let RoleCreateInput = class RoleCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutRoleInput_1.UserCreateNestedManyWithoutRoleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutRoleInput_1.UserCreateNestedManyWithoutRoleInput)
], RoleCreateInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesCreateNestedManyWithoutRolesInput_1.PagesCreateNestedManyWithoutRolesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesCreateNestedManyWithoutRolesInput_1.PagesCreateNestedManyWithoutRolesInput)
], RoleCreateInput.prototype, "pages", void 0);
RoleCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleCreateInput", {
        isAbstract: true
    })
], RoleCreateInput);
exports.RoleCreateInput = RoleCreateInput;
