"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesUpdateManyWithoutRolesInput_1 = require("../inputs/PagesUpdateManyWithoutRolesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let RoleUpdateWithoutUsersInput = class RoleUpdateWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoleUpdateWithoutUsersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoleUpdateWithoutUsersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesUpdateManyWithoutRolesInput_1.PagesUpdateManyWithoutRolesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesUpdateManyWithoutRolesInput_1.PagesUpdateManyWithoutRolesInput)
], RoleUpdateWithoutUsersInput.prototype, "pages", void 0);
RoleUpdateWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateWithoutUsersInput", {
        isAbstract: true
    })
], RoleUpdateWithoutUsersInput);
exports.RoleUpdateWithoutUsersInput = RoleUpdateWithoutUsersInput;
