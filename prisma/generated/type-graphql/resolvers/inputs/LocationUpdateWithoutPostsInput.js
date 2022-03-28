"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryUpdateOneRequiredWithoutLocationsInput_1 = require("../inputs/CountryUpdateOneRequiredWithoutLocationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LocationUpdateWithoutPostsInput = class LocationUpdateWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateWithoutPostsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateWithoutPostsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryUpdateOneRequiredWithoutLocationsInput_1.CountryUpdateOneRequiredWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryUpdateOneRequiredWithoutLocationsInput_1.CountryUpdateOneRequiredWithoutLocationsInput)
], LocationUpdateWithoutPostsInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LocationUpdateWithoutPostsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LocationUpdateWithoutPostsInput.prototype, "updated_at", void 0);
LocationUpdateWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpdateWithoutPostsInput", {
        isAbstract: true
    })
], LocationUpdateWithoutPostsInput);
exports.LocationUpdateWithoutPostsInput = LocationUpdateWithoutPostsInput;
