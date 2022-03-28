"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutCommentsInput_1 = require("../inputs/UserCreateOrConnectWithoutCommentsInput");
const UserCreateWithoutCommentsInput_1 = require("../inputs/UserCreateWithoutCommentsInput");
const UserUpdateWithoutCommentsInput_1 = require("../inputs/UserUpdateWithoutCommentsInput");
const UserUpsertWithoutCommentsInput_1 = require("../inputs/UserUpsertWithoutCommentsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutCommentsInput = class UserUpdateOneRequiredWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutCommentsInput_1.UserCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutCommentsInput_1.UserCreateWithoutCommentsInput)
], UserUpdateOneRequiredWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCommentsInput_1.UserCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutCommentsInput_1.UserCreateOrConnectWithoutCommentsInput)
], UserUpdateOneRequiredWithoutCommentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutCommentsInput_1.UserUpsertWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutCommentsInput_1.UserUpsertWithoutCommentsInput)
], UserUpdateOneRequiredWithoutCommentsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutCommentsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutCommentsInput_1.UserUpdateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutCommentsInput_1.UserUpdateWithoutCommentsInput)
], UserUpdateOneRequiredWithoutCommentsInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCommentsInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutCommentsInput);
exports.UserUpdateOneRequiredWithoutCommentsInput = UserUpdateOneRequiredWithoutCommentsInput;
