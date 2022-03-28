"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateOrConnectWithoutPagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateWithoutPagesInput_1 = require("../inputs/RoleCreateWithoutPagesInput");
const RoleWhereUniqueInput_1 = require("../inputs/RoleWhereUniqueInput");
let RoleCreateOrConnectWithoutPagesInput = class RoleCreateOrConnectWithoutPagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], RoleCreateOrConnectWithoutPagesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateWithoutPagesInput_1.RoleCreateWithoutPagesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleCreateWithoutPagesInput_1.RoleCreateWithoutPagesInput)
], RoleCreateOrConnectWithoutPagesInput.prototype, "create", void 0);
RoleCreateOrConnectWithoutPagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleCreateOrConnectWithoutPagesInput", {
        isAbstract: true
    })
], RoleCreateOrConnectWithoutPagesInput);
exports.RoleCreateOrConnectWithoutPagesInput = RoleCreateOrConnectWithoutPagesInput;
