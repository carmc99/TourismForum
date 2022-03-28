"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateWithoutPagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedManyWithoutRoleInput_1 = require("../inputs/UserCreateNestedManyWithoutRoleInput");
let RoleCreateWithoutPagesInput = class RoleCreateWithoutPagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateWithoutPagesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoleCreateWithoutPagesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutRoleInput_1.UserCreateNestedManyWithoutRoleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutRoleInput_1.UserCreateNestedManyWithoutRoleInput)
], RoleCreateWithoutPagesInput.prototype, "users", void 0);
RoleCreateWithoutPagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleCreateWithoutPagesInput", {
        isAbstract: true
    })
], RoleCreateWithoutPagesInput);
exports.RoleCreateWithoutPagesInput = RoleCreateWithoutPagesInput;
