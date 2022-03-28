"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateOneRequiredWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateOrConnectWithoutUsersInput_1 = require("../inputs/RoleCreateOrConnectWithoutUsersInput");
const RoleCreateWithoutUsersInput_1 = require("../inputs/RoleCreateWithoutUsersInput");
const RoleUpdateWithoutUsersInput_1 = require("../inputs/RoleUpdateWithoutUsersInput");
const RoleUpsertWithoutUsersInput_1 = require("../inputs/RoleUpsertWithoutUsersInput");
const RoleWhereUniqueInput_1 = require("../inputs/RoleWhereUniqueInput");
let RoleUpdateOneRequiredWithoutUsersInput = class RoleUpdateOneRequiredWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput)
], RoleUpdateOneRequiredWithoutUsersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateOrConnectWithoutUsersInput_1.RoleCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCreateOrConnectWithoutUsersInput_1.RoleCreateOrConnectWithoutUsersInput)
], RoleUpdateOneRequiredWithoutUsersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpsertWithoutUsersInput_1.RoleUpsertWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleUpsertWithoutUsersInput_1.RoleUpsertWithoutUsersInput)
], RoleUpdateOneRequiredWithoutUsersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], RoleUpdateOneRequiredWithoutUsersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateWithoutUsersInput_1.RoleUpdateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleUpdateWithoutUsersInput_1.RoleUpdateWithoutUsersInput)
], RoleUpdateOneRequiredWithoutUsersInput.prototype, "update", void 0);
RoleUpdateOneRequiredWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateOneRequiredWithoutUsersInput", {
        isAbstract: true
    })
], RoleUpdateOneRequiredWithoutUsersInput);
exports.RoleUpdateOneRequiredWithoutUsersInput = RoleUpdateOneRequiredWithoutUsersInput;
