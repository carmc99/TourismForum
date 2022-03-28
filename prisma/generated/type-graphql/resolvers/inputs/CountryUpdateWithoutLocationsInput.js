"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryUpdateWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProfileUpdateManyWithoutCountryInput_1 = require("../inputs/ProfileUpdateManyWithoutCountryInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CountryUpdateWithoutLocationsInput = class CountryUpdateWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CountryUpdateWithoutLocationsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CountryUpdateWithoutLocationsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdateManyWithoutCountryInput_1.ProfileUpdateManyWithoutCountryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileUpdateManyWithoutCountryInput_1.ProfileUpdateManyWithoutCountryInput)
], CountryUpdateWithoutLocationsInput.prototype, "profiles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CountryUpdateWithoutLocationsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CountryUpdateWithoutLocationsInput.prototype, "updated_at", void 0);
CountryUpdateWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryUpdateWithoutLocationsInput", {
        isAbstract: true
    })
], CountryUpdateWithoutLocationsInput);
exports.CountryUpdateWithoutLocationsInput = CountryUpdateWithoutLocationsInput;
