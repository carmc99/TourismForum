"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesUpsertWithWhereUniqueWithoutRolesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesCreateWithoutRolesInput_1 = require("../inputs/PagesCreateWithoutRolesInput");
const PagesUpdateWithoutRolesInput_1 = require("../inputs/PagesUpdateWithoutRolesInput");
const PagesWhereUniqueInput_1 = require("../inputs/PagesWhereUniqueInput");
let PagesUpsertWithWhereUniqueWithoutRolesInput = class PagesUpsertWithWhereUniqueWithoutRolesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereUniqueInput_1.PagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesWhereUniqueInput_1.PagesWhereUniqueInput)
], PagesUpsertWithWhereUniqueWithoutRolesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesUpdateWithoutRolesInput_1.PagesUpdateWithoutRolesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesUpdateWithoutRolesInput_1.PagesUpdateWithoutRolesInput)
], PagesUpsertWithWhereUniqueWithoutRolesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesCreateWithoutRolesInput_1.PagesCreateWithoutRolesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesCreateWithoutRolesInput_1.PagesCreateWithoutRolesInput)
], PagesUpsertWithWhereUniqueWithoutRolesInput.prototype, "create", void 0);
PagesUpsertWithWhereUniqueWithoutRolesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesUpsertWithWhereUniqueWithoutRolesInput", {
        isAbstract: true
    })
], PagesUpsertWithWhereUniqueWithoutRolesInput);
exports.PagesUpsertWithWhereUniqueWithoutRolesInput = PagesUpsertWithWhereUniqueWithoutRolesInput;
