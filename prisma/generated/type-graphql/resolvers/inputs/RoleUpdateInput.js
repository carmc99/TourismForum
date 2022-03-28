"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesUpdateManyWithoutRolesInput_1 = require("../inputs/PagesUpdateManyWithoutRolesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateManyWithoutRoleInput_1 = require("../inputs/UserUpdateManyWithoutRoleInput");
let RoleUpdateInput = class RoleUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoleUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoleUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutRoleInput_1.UserUpdateManyWithoutRoleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutRoleInput_1.UserUpdateManyWithoutRoleInput)
], RoleUpdateInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesUpdateManyWithoutRolesInput_1.PagesUpdateManyWithoutRolesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesUpdateManyWithoutRolesInput_1.PagesUpdateManyWithoutRolesInput)
], RoleUpdateInput.prototype, "pages", void 0);
RoleUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateInput", {
        isAbstract: true
    })
], RoleUpdateInput);
exports.RoleUpdateInput = RoleUpdateInput;
