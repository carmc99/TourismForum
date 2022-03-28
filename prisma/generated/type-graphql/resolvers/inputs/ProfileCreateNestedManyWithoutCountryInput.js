"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateNestedManyWithoutCountryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreateManyCountryInputEnvelope_1 = require("../inputs/ProfileCreateManyCountryInputEnvelope");
const ProfileCreateOrConnectWithoutCountryInput_1 = require("../inputs/ProfileCreateOrConnectWithoutCountryInput");
const ProfileCreateWithoutCountryInput_1 = require("../inputs/ProfileCreateWithoutCountryInput");
const ProfileWhereUniqueInput_1 = require("../inputs/ProfileWhereUniqueInput");
let ProfileCreateNestedManyWithoutCountryInput = class ProfileCreateNestedManyWithoutCountryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileCreateWithoutCountryInput_1.ProfileCreateWithoutCountryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileCreateNestedManyWithoutCountryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileCreateOrConnectWithoutCountryInput_1.ProfileCreateOrConnectWithoutCountryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileCreateNestedManyWithoutCountryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreateManyCountryInputEnvelope_1.ProfileCreateManyCountryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCreateManyCountryInputEnvelope_1.ProfileCreateManyCountryInputEnvelope)
], ProfileCreateNestedManyWithoutCountryInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileWhereUniqueInput_1.ProfileWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileCreateNestedManyWithoutCountryInput.prototype, "connect", void 0);
ProfileCreateNestedManyWithoutCountryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileCreateNestedManyWithoutCountryInput", {
        isAbstract: true
    })
], ProfileCreateNestedManyWithoutCountryInput);
exports.ProfileCreateNestedManyWithoutCountryInput = ProfileCreateNestedManyWithoutCountryInput;
