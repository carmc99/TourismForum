"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryUpdateWithoutProfilesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const LocationUpdateManyWithoutCountryInput_1 = require("../inputs/LocationUpdateManyWithoutCountryInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CountryUpdateWithoutProfilesInput = class CountryUpdateWithoutProfilesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CountryUpdateWithoutProfilesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CountryUpdateWithoutProfilesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateManyWithoutCountryInput_1.LocationUpdateManyWithoutCountryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationUpdateManyWithoutCountryInput_1.LocationUpdateManyWithoutCountryInput)
], CountryUpdateWithoutProfilesInput.prototype, "locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CountryUpdateWithoutProfilesInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CountryUpdateWithoutProfilesInput.prototype, "updated_at", void 0);
CountryUpdateWithoutProfilesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryUpdateWithoutProfilesInput", {
        isAbstract: true
    })
], CountryUpdateWithoutProfilesInput);
exports.CountryUpdateWithoutProfilesInput = CountryUpdateWithoutProfilesInput;
