"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateManyWithWhereWithoutPagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleScalarWhereInput_1 = require("../inputs/RoleScalarWhereInput");
const RoleUpdateManyMutationInput_1 = require("../inputs/RoleUpdateManyMutationInput");
let RoleUpdateManyWithWhereWithoutPagesInput = class RoleUpdateManyWithWhereWithoutPagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleScalarWhereInput_1.RoleScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleScalarWhereInput_1.RoleScalarWhereInput)
], RoleUpdateManyWithWhereWithoutPagesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateManyMutationInput_1.RoleUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleUpdateManyMutationInput_1.RoleUpdateManyMutationInput)
], RoleUpdateManyWithWhereWithoutPagesInput.prototype, "data", void 0);
RoleUpdateManyWithWhereWithoutPagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateManyWithWhereWithoutPagesInput", {
        isAbstract: true
    })
], RoleUpdateManyWithWhereWithoutPagesInput);
exports.RoleUpdateManyWithWhereWithoutPagesInput = RoleUpdateManyWithWhereWithoutPagesInput;
