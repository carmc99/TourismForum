"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateOrConnectWithoutCountryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreateWithoutCountryInput_1 = require("../inputs/ProfileCreateWithoutCountryInput");
const ProfileWhereUniqueInput_1 = require("../inputs/ProfileWhereUniqueInput");
let ProfileCreateOrConnectWithoutCountryInput = class ProfileCreateOrConnectWithoutCountryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereUniqueInput_1.ProfileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileWhereUniqueInput_1.ProfileWhereUniqueInput)
], ProfileCreateOrConnectWithoutCountryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreateWithoutCountryInput_1.ProfileCreateWithoutCountryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileCreateWithoutCountryInput_1.ProfileCreateWithoutCountryInput)
], ProfileCreateOrConnectWithoutCountryInput.prototype, "create", void 0);
ProfileCreateOrConnectWithoutCountryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileCreateOrConnectWithoutCountryInput", {
        isAbstract: true
    })
], ProfileCreateOrConnectWithoutCountryInput);
exports.ProfileCreateOrConnectWithoutCountryInput = ProfileCreateOrConnectWithoutCountryInput;
