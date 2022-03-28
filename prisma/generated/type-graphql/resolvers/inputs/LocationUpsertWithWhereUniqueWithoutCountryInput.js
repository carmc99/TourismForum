"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpsertWithWhereUniqueWithoutCountryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateWithoutCountryInput_1 = require("../inputs/LocationCreateWithoutCountryInput");
const LocationUpdateWithoutCountryInput_1 = require("../inputs/LocationUpdateWithoutCountryInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationUpsertWithWhereUniqueWithoutCountryInput = class LocationUpsertWithWhereUniqueWithoutCountryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationUpsertWithWhereUniqueWithoutCountryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateWithoutCountryInput_1.LocationUpdateWithoutCountryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationUpdateWithoutCountryInput_1.LocationUpdateWithoutCountryInput)
], LocationUpsertWithWhereUniqueWithoutCountryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateWithoutCountryInput_1.LocationCreateWithoutCountryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationCreateWithoutCountryInput_1.LocationCreateWithoutCountryInput)
], LocationUpsertWithWhereUniqueWithoutCountryInput.prototype, "create", void 0);
LocationUpsertWithWhereUniqueWithoutCountryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpsertWithWhereUniqueWithoutCountryInput", {
        isAbstract: true
    })
], LocationUpsertWithWhereUniqueWithoutCountryInput);
exports.LocationUpsertWithWhereUniqueWithoutCountryInput = LocationUpsertWithWhereUniqueWithoutCountryInput;
