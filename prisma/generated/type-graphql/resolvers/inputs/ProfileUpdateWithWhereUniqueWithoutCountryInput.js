"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateWithWhereUniqueWithoutCountryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileUpdateWithoutCountryInput_1 = require("../inputs/ProfileUpdateWithoutCountryInput");
const ProfileWhereUniqueInput_1 = require("../inputs/ProfileWhereUniqueInput");
let ProfileUpdateWithWhereUniqueWithoutCountryInput = class ProfileUpdateWithWhereUniqueWithoutCountryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereUniqueInput_1.ProfileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileWhereUniqueInput_1.ProfileWhereUniqueInput)
], ProfileUpdateWithWhereUniqueWithoutCountryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdateWithoutCountryInput_1.ProfileUpdateWithoutCountryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileUpdateWithoutCountryInput_1.ProfileUpdateWithoutCountryInput)
], ProfileUpdateWithWhereUniqueWithoutCountryInput.prototype, "data", void 0);
ProfileUpdateWithWhereUniqueWithoutCountryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdateWithWhereUniqueWithoutCountryInput", {
        isAbstract: true
    })
], ProfileUpdateWithWhereUniqueWithoutCountryInput);
exports.ProfileUpdateWithWhereUniqueWithoutCountryInput = ProfileUpdateWithWhereUniqueWithoutCountryInput;
