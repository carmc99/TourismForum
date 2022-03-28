"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithoutRoleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateManyRoleInputEnvelope_1 = require("../inputs/UserCreateManyRoleInputEnvelope");
const UserCreateOrConnectWithoutRoleInput_1 = require("../inputs/UserCreateOrConnectWithoutRoleInput");
const UserCreateWithoutRoleInput_1 = require("../inputs/UserCreateWithoutRoleInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutRoleInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutRoleInput");
const UserUpdateWithWhereUniqueWithoutRoleInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutRoleInput");
const UserUpsertWithWhereUniqueWithoutRoleInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutRoleInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutRoleInput = class UserUpdateManyWithoutRoleInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutRoleInput_1.UserCreateWithoutRoleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutRoleInput_1.UserCreateOrConnectWithoutRoleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutRoleInput_1.UserUpsertWithWhereUniqueWithoutRoleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateManyRoleInputEnvelope_1.UserCreateManyRoleInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateManyRoleInputEnvelope_1.UserCreateManyRoleInputEnvelope)
], UserUpdateManyWithoutRoleInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutRoleInput_1.UserUpdateWithWhereUniqueWithoutRoleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutRoleInput_1.UserUpdateManyWithWhereWithoutRoleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateManyWithoutRoleInput.prototype, "deleteMany", void 0);
UserUpdateManyWithoutRoleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateManyWithoutRoleInput", {
        isAbstract: true
    })
], UserUpdateManyWithoutRoleInput);
exports.UserUpdateManyWithoutRoleInput = UserUpdateManyWithoutRoleInput;
