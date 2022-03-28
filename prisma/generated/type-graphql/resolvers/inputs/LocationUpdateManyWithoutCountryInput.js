"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateManyWithoutCountryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateManyCountryInputEnvelope_1 = require("../inputs/LocationCreateManyCountryInputEnvelope");
const LocationCreateOrConnectWithoutCountryInput_1 = require("../inputs/LocationCreateOrConnectWithoutCountryInput");
const LocationCreateWithoutCountryInput_1 = require("../inputs/LocationCreateWithoutCountryInput");
const LocationScalarWhereInput_1 = require("../inputs/LocationScalarWhereInput");
const LocationUpdateManyWithWhereWithoutCountryInput_1 = require("../inputs/LocationUpdateManyWithWhereWithoutCountryInput");
const LocationUpdateWithWhereUniqueWithoutCountryInput_1 = require("../inputs/LocationUpdateWithWhereUniqueWithoutCountryInput");
const LocationUpsertWithWhereUniqueWithoutCountryInput_1 = require("../inputs/LocationUpsertWithWhereUniqueWithoutCountryInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationUpdateManyWithoutCountryInput = class LocationUpdateManyWithoutCountryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationCreateWithoutCountryInput_1.LocationCreateWithoutCountryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutCountryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationCreateOrConnectWithoutCountryInput_1.LocationCreateOrConnectWithoutCountryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutCountryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationUpsertWithWhereUniqueWithoutCountryInput_1.LocationUpsertWithWhereUniqueWithoutCountryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutCountryInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateManyCountryInputEnvelope_1.LocationCreateManyCountryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateManyCountryInputEnvelope_1.LocationCreateManyCountryInputEnvelope)
], LocationUpdateManyWithoutCountryInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereUniqueInput_1.LocationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutCountryInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereUniqueInput_1.LocationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutCountryInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereUniqueInput_1.LocationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutCountryInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereUniqueInput_1.LocationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutCountryInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationUpdateWithWhereUniqueWithoutCountryInput_1.LocationUpdateWithWhereUniqueWithoutCountryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutCountryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationUpdateManyWithWhereWithoutCountryInput_1.LocationUpdateManyWithWhereWithoutCountryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutCountryInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationScalarWhereInput_1.LocationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationUpdateManyWithoutCountryInput.prototype, "deleteMany", void 0);
LocationUpdateManyWithoutCountryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpdateManyWithoutCountryInput", {
        isAbstract: true
    })
], LocationUpdateManyWithoutCountryInput);
exports.LocationUpdateManyWithoutCountryInput = LocationUpdateManyWithoutCountryInput;
