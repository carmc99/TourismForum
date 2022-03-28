"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesCreateNestedManyWithoutRolesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesCreateOrConnectWithoutRolesInput_1 = require("../inputs/PagesCreateOrConnectWithoutRolesInput");
const PagesCreateWithoutRolesInput_1 = require("../inputs/PagesCreateWithoutRolesInput");
const PagesWhereUniqueInput_1 = require("../inputs/PagesWhereUniqueInput");
let PagesCreateNestedManyWithoutRolesInput = class PagesCreateNestedManyWithoutRolesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesCreateWithoutRolesInput_1.PagesCreateWithoutRolesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesCreateNestedManyWithoutRolesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesCreateOrConnectWithoutRolesInput_1.PagesCreateOrConnectWithoutRolesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesCreateNestedManyWithoutRolesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesWhereUniqueInput_1.PagesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesCreateNestedManyWithoutRolesInput.prototype, "connect", void 0);
PagesCreateNestedManyWithoutRolesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesCreateNestedManyWithoutRolesInput", {
        isAbstract: true
    })
], PagesCreateNestedManyWithoutRolesInput);
exports.PagesCreateNestedManyWithoutRolesInput = PagesCreateNestedManyWithoutRolesInput;
