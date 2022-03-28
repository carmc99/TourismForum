"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateManyWithoutCountryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreateManyCountryInputEnvelope_1 = require("../inputs/ProfileCreateManyCountryInputEnvelope");
const ProfileCreateOrConnectWithoutCountryInput_1 = require("../inputs/ProfileCreateOrConnectWithoutCountryInput");
const ProfileCreateWithoutCountryInput_1 = require("../inputs/ProfileCreateWithoutCountryInput");
const ProfileScalarWhereInput_1 = require("../inputs/ProfileScalarWhereInput");
const ProfileUpdateManyWithWhereWithoutCountryInput_1 = require("../inputs/ProfileUpdateManyWithWhereWithoutCountryInput");
const ProfileUpdateWithWhereUniqueWithoutCountryInput_1 = require("../inputs/ProfileUpdateWithWhereUniqueWithoutCountryInput");
const ProfileUpsertWithWhereUniqueWithoutCountryInput_1 = require("../inputs/ProfileUpsertWithWhereUniqueWithoutCountryInput");
const ProfileWhereUniqueInput_1 = require("../inputs/ProfileWhereUniqueInput");
let ProfileUpdateManyWithoutCountryInput = class ProfileUpdateManyWithoutCountryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileCreateWithoutCountryInput_1.ProfileCreateWithoutCountryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileUpdateManyWithoutCountryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileCreateOrConnectWithoutCountryInput_1.ProfileCreateOrConnectWithoutCountryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileUpdateManyWithoutCountryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileUpsertWithWhereUniqueWithoutCountryInput_1.ProfileUpsertWithWhereUniqueWithoutCountryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileUpdateManyWithoutCountryInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreateManyCountryInputEnvelope_1.ProfileCreateManyCountryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCreateManyCountryInputEnvelope_1.ProfileCreateManyCountryInputEnvelope)
], ProfileUpdateManyWithoutCountryInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileWhereUniqueInput_1.ProfileWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileUpdateManyWithoutCountryInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileWhereUniqueInput_1.ProfileWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileUpdateManyWithoutCountryInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileWhereUniqueInput_1.ProfileWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileUpdateManyWithoutCountryInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileWhereUniqueInput_1.ProfileWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileUpdateManyWithoutCountryInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileUpdateWithWhereUniqueWithoutCountryInput_1.ProfileUpdateWithWhereUniqueWithoutCountryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileUpdateManyWithoutCountryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileUpdateManyWithWhereWithoutCountryInput_1.ProfileUpdateManyWithWhereWithoutCountryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileUpdateManyWithoutCountryInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileScalarWhereInput_1.ProfileScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileUpdateManyWithoutCountryInput.prototype, "deleteMany", void 0);
ProfileUpdateManyWithoutCountryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileUpdateManyWithoutCountryInput", {
        isAbstract: true
    })
], ProfileUpdateManyWithoutCountryInput);
exports.ProfileUpdateManyWithoutCountryInput = ProfileUpdateManyWithoutCountryInput;
