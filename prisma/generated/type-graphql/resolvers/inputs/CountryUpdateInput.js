"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const LocationUpdateManyWithoutCountryInput_1 = require("../inputs/LocationUpdateManyWithoutCountryInput");
const ProfileUpdateManyWithoutCountryInput_1 = require("../inputs/ProfileUpdateManyWithoutCountryInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CountryUpdateInput = class CountryUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CountryUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CountryUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileUpdateManyWithoutCountryInput_1.ProfileUpdateManyWithoutCountryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileUpdateManyWithoutCountryInput_1.ProfileUpdateManyWithoutCountryInput)
], CountryUpdateInput.prototype, "profiles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateManyWithoutCountryInput_1.LocationUpdateManyWithoutCountryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationUpdateManyWithoutCountryInput_1.LocationUpdateManyWithoutCountryInput)
], CountryUpdateInput.prototype, "locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CountryUpdateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CountryUpdateInput.prototype, "updated_at", void 0);
CountryUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryUpdateInput", {
        isAbstract: true
    })
], CountryUpdateInput);
exports.CountryUpdateInput = CountryUpdateInput;
