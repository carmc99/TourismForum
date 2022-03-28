"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateNestedManyWithoutPagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateOrConnectWithoutPagesInput_1 = require("../inputs/RoleCreateOrConnectWithoutPagesInput");
const RoleCreateWithoutPagesInput_1 = require("../inputs/RoleCreateWithoutPagesInput");
const RoleWhereUniqueInput_1 = require("../inputs/RoleWhereUniqueInput");
let RoleCreateNestedManyWithoutPagesInput = class RoleCreateNestedManyWithoutPagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleCreateWithoutPagesInput_1.RoleCreateWithoutPagesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleCreateNestedManyWithoutPagesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleCreateOrConnectWithoutPagesInput_1.RoleCreateOrConnectWithoutPagesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleCreateNestedManyWithoutPagesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereUniqueInput_1.RoleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleCreateNestedManyWithoutPagesInput.prototype, "connect", void 0);
RoleCreateNestedManyWithoutPagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleCreateNestedManyWithoutPagesInput", {
        isAbstract: true
    })
], RoleCreateNestedManyWithoutPagesInput);
exports.RoleCreateNestedManyWithoutPagesInput = RoleCreateNestedManyWithoutPagesInput;
