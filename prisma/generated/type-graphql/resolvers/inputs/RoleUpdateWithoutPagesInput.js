"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateWithoutPagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateManyWithoutRoleInput_1 = require("../inputs/UserUpdateManyWithoutRoleInput");
let RoleUpdateWithoutPagesInput = class RoleUpdateWithoutPagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoleUpdateWithoutPagesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoleUpdateWithoutPagesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutRoleInput_1.UserUpdateManyWithoutRoleInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutRoleInput_1.UserUpdateManyWithoutRoleInput)
], RoleUpdateWithoutPagesInput.prototype, "users", void 0);
RoleUpdateWithoutPagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateWithoutPagesInput", {
        isAbstract: true
    })
], RoleUpdateWithoutPagesInput);
exports.RoleUpdateWithoutPagesInput = RoleUpdateWithoutPagesInput;
