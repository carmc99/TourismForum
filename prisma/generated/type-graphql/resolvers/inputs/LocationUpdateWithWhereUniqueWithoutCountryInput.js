"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateWithWhereUniqueWithoutCountryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationUpdateWithoutCountryInput_1 = require("../inputs/LocationUpdateWithoutCountryInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationUpdateWithWhereUniqueWithoutCountryInput = class LocationUpdateWithWhereUniqueWithoutCountryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationUpdateWithWhereUniqueWithoutCountryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateWithoutCountryInput_1.LocationUpdateWithoutCountryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationUpdateWithoutCountryInput_1.LocationUpdateWithoutCountryInput)
], LocationUpdateWithWhereUniqueWithoutCountryInput.prototype, "data", void 0);
LocationUpdateWithWhereUniqueWithoutCountryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpdateWithWhereUniqueWithoutCountryInput", {
        isAbstract: true
    })
], LocationUpdateWithWhereUniqueWithoutCountryInput);
exports.LocationUpdateWithWhereUniqueWithoutCountryInput = LocationUpdateWithWhereUniqueWithoutCountryInput;
