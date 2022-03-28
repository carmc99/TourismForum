"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesUpdateWithWhereUniqueWithoutRolesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesUpdateWithoutRolesInput_1 = require("../inputs/PagesUpdateWithoutRolesInput");
const PagesWhereUniqueInput_1 = require("../inputs/PagesWhereUniqueInput");
let PagesUpdateWithWhereUniqueWithoutRolesInput = class PagesUpdateWithWhereUniqueWithoutRolesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereUniqueInput_1.PagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesWhereUniqueInput_1.PagesWhereUniqueInput)
], PagesUpdateWithWhereUniqueWithoutRolesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesUpdateWithoutRolesInput_1.PagesUpdateWithoutRolesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesUpdateWithoutRolesInput_1.PagesUpdateWithoutRolesInput)
], PagesUpdateWithWhereUniqueWithoutRolesInput.prototype, "data", void 0);
PagesUpdateWithWhereUniqueWithoutRolesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesUpdateWithWhereUniqueWithoutRolesInput", {
        isAbstract: true
    })
], PagesUpdateWithWhereUniqueWithoutRolesInput);
exports.PagesUpdateWithWhereUniqueWithoutRolesInput = PagesUpdateWithWhereUniqueWithoutRolesInput;
