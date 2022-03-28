"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpsertWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateWithoutUsersInput_1 = require("../inputs/RoleCreateWithoutUsersInput");
const RoleUpdateWithoutUsersInput_1 = require("../inputs/RoleUpdateWithoutUsersInput");
let RoleUpsertWithoutUsersInput = class RoleUpsertWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateWithoutUsersInput_1.RoleUpdateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleUpdateWithoutUsersInput_1.RoleUpdateWithoutUsersInput)
], RoleUpsertWithoutUsersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput)
], RoleUpsertWithoutUsersInput.prototype, "create", void 0);
RoleUpsertWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpsertWithoutUsersInput", {
        isAbstract: true
    })
], RoleUpsertWithoutUsersInput);
exports.RoleUpsertWithoutUsersInput = RoleUpsertWithoutUsersInput;
