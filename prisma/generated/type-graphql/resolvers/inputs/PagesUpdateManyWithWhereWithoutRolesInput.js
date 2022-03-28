"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesUpdateManyWithWhereWithoutRolesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesScalarWhereInput_1 = require("../inputs/PagesScalarWhereInput");
const PagesUpdateManyMutationInput_1 = require("../inputs/PagesUpdateManyMutationInput");
let PagesUpdateManyWithWhereWithoutRolesInput = class PagesUpdateManyWithWhereWithoutRolesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesScalarWhereInput_1.PagesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesScalarWhereInput_1.PagesScalarWhereInput)
], PagesUpdateManyWithWhereWithoutRolesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesUpdateManyMutationInput_1.PagesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesUpdateManyMutationInput_1.PagesUpdateManyMutationInput)
], PagesUpdateManyWithWhereWithoutRolesInput.prototype, "data", void 0);
PagesUpdateManyWithWhereWithoutRolesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesUpdateManyWithWhereWithoutRolesInput", {
        isAbstract: true
    })
], PagesUpdateManyWithWhereWithoutRolesInput);
exports.PagesUpdateManyWithWhereWithoutRolesInput = PagesUpdateManyWithWhereWithoutRolesInput;
