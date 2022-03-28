"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateOneWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateOrConnectWithoutUsersInput_1 = require("../inputs/RoleCreateOrConnectWithoutUsersInput");
const RoleCreateWithoutUsersInput_1 = require("../inputs/RoleCreateWithoutUsersInput");
const RoleUpdateWithoutUsersInput_1 = require("../inputs/RoleUpdateWithoutUsersInput");
const RoleUpsertWithoutUsersInput_1 = require("../inputs/RoleUpsertWithoutUsersInput");
const RoleWhereUniqueInput_1 = require("../inputs/RoleWhereUniqueInput");
let RoleUpdateOneWithoutUsersInput = class RoleUpdateOneWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput)
], RoleUpdateOneWithoutUsersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateOrConnectWithoutUsersInput_1.RoleCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCreateOrConnectWithoutUsersInput_1.RoleCreateOrConnectWithoutUsersInput)
], RoleUpdateOneWithoutUsersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpsertWithoutUsersInput_1.RoleUpsertWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleUpsertWithoutUsersInput_1.RoleUpsertWithoutUsersInput)
], RoleUpdateOneWithoutUsersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], RoleUpdateOneWithoutUsersInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], RoleUpdateOneWithoutUsersInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], RoleUpdateOneWithoutUsersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateWithoutUsersInput_1.RoleUpdateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleUpdateWithoutUsersInput_1.RoleUpdateWithoutUsersInput)
], RoleUpdateOneWithoutUsersInput.prototype, "update", void 0);
RoleUpdateOneWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateOneWithoutUsersInput", {
        isAbstract: true
    })
], RoleUpdateOneWithoutUsersInput);
exports.RoleUpdateOneWithoutUsersInput = RoleUpdateOneWithoutUsersInput;
