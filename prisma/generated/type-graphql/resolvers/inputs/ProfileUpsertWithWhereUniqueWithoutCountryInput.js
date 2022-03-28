"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpsertWithWhereUniqueWithoutCountryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreateWithoutCountryInput_1 = require("../inputs/ProfileCreateWithoutCountryInput");
const ProfileUpdateWithoutCountryInput_1 = require("../inputs/ProfileUpdateWithoutCountryInput");
const ProfileWhereUniqueInput_1 = require("../inputs/ProfileWhereUniqueInput");
let ProfileUpsertWithWhereUniqueWithoutCountryInput = class ProfileUpsertWithWhereUniqueWithoutCountryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereUniqueInput_1.ProfileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileWhereUniqueInput_1.ProfileWhereUniqueInput)
], ProfileUpsertWithWhereUniqueWithoutCountryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdateWithoutCountryInput_1.ProfileUpdateWithoutCountryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileUpdateWithoutCountryInput_1.ProfileUpdateWithoutCountryInput)
], ProfileUpsertWithWhereUniqueWithoutCountryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreateWithoutCountryInput_1.ProfileCreateWithoutCountryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileCreateWithoutCountryInput_1.ProfileCreateWithoutCountryInput)
], ProfileUpsertWithWhereUniqueWithoutCountryInput.prototype, "create", void 0);
ProfileUpsertWithWhereUniqueWithoutCountryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpsertWithWhereUniqueWithoutCountryInput", {
        isAbstract: true
    })
], ProfileUpsertWithWhereUniqueWithoutCountryInput);
exports.ProfileUpsertWithWhereUniqueWithoutCountryInput = ProfileUpsertWithWhereUniqueWithoutCountryInput;
