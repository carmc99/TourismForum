"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpsertWithWhereUniqueWithoutPagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateWithoutPagesInput_1 = require("../inputs/RoleCreateWithoutPagesInput");
const RoleUpdateWithoutPagesInput_1 = require("../inputs/RoleUpdateWithoutPagesInput");
const RoleWhereUniqueInput_1 = require("../inputs/RoleWhereUniqueInput");
let RoleUpsertWithWhereUniqueWithoutPagesInput = class RoleUpsertWithWhereUniqueWithoutPagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], RoleUpsertWithWhereUniqueWithoutPagesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateWithoutPagesInput_1.RoleUpdateWithoutPagesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleUpdateWithoutPagesInput_1.RoleUpdateWithoutPagesInput)
], RoleUpsertWithWhereUniqueWithoutPagesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateWithoutPagesInput_1.RoleCreateWithoutPagesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleCreateWithoutPagesInput_1.RoleCreateWithoutPagesInput)
], RoleUpsertWithWhereUniqueWithoutPagesInput.prototype, "create", void 0);
RoleUpsertWithWhereUniqueWithoutPagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpsertWithWhereUniqueWithoutPagesInput", {
        isAbstract: true
    })
], RoleUpsertWithWhereUniqueWithoutPagesInput);
exports.RoleUpsertWithWhereUniqueWithoutPagesInput = RoleUpsertWithWhereUniqueWithoutPagesInput;
