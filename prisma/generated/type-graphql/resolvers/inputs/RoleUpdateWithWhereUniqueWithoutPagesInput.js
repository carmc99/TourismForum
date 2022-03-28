"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateWithWhereUniqueWithoutPagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleUpdateWithoutPagesInput_1 = require("../inputs/RoleUpdateWithoutPagesInput");
const RoleWhereUniqueInput_1 = require("../inputs/RoleWhereUniqueInput");
let RoleUpdateWithWhereUniqueWithoutPagesInput = class RoleUpdateWithWhereUniqueWithoutPagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], RoleUpdateWithWhereUniqueWithoutPagesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateWithoutPagesInput_1.RoleUpdateWithoutPagesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleUpdateWithoutPagesInput_1.RoleUpdateWithoutPagesInput)
], RoleUpdateWithWhereUniqueWithoutPagesInput.prototype, "data", void 0);
RoleUpdateWithWhereUniqueWithoutPagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateWithWhereUniqueWithoutPagesInput", {
        isAbstract: true
    })
], RoleUpdateWithWhereUniqueWithoutPagesInput);
exports.RoleUpdateWithWhereUniqueWithoutPagesInput = RoleUpdateWithWhereUniqueWithoutPagesInput;
