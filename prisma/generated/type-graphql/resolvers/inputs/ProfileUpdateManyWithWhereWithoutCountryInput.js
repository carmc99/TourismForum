"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateManyWithWhereWithoutCountryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileScalarWhereInput_1 = require("../inputs/ProfileScalarWhereInput");
const ProfileUpdateManyMutationInput_1 = require("../inputs/ProfileUpdateManyMutationInput");
let ProfileUpdateManyWithWhereWithoutCountryInput = class ProfileUpdateManyWithWhereWithoutCountryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileScalarWhereInput_1.ProfileScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileScalarWhereInput_1.ProfileScalarWhereInput)
], ProfileUpdateManyWithWhereWithoutCountryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdateManyMutationInput_1.ProfileUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileUpdateManyMutationInput_1.ProfileUpdateManyMutationInput)
], ProfileUpdateManyWithWhereWithoutCountryInput.prototype, "data", void 0);
ProfileUpdateManyWithWhereWithoutCountryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdateManyWithWhereWithoutCountryInput", {
        isAbstract: true
    })
], ProfileUpdateManyWithWhereWithoutCountryInput);
exports.ProfileUpdateManyWithWhereWithoutCountryInput = ProfileUpdateManyWithWhereWithoutCountryInput;
