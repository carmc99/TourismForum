"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryUpdateOneRequiredWithoutLocationsInput_1 = require("../inputs/CountryUpdateOneRequiredWithoutLocationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PostUpdateManyWithoutLocationInput_1 = require("../inputs/PostUpdateManyWithoutLocationInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LocationUpdateInput = class LocationUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutLocationInput_1.PostUpdateManyWithoutLocationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutLocationInput_1.PostUpdateManyWithoutLocationInput)
], LocationUpdateInput.prototype, "posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryUpdateOneRequiredWithoutLocationsInput_1.CountryUpdateOneRequiredWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryUpdateOneRequiredWithoutLocationsInput_1.CountryUpdateOneRequiredWithoutLocationsInput)
], LocationUpdateInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LocationUpdateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LocationUpdateInput.prototype, "updated_at", void 0);
LocationUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpdateInput", {
        isAbstract: true
    })
], LocationUpdateInput);
exports.LocationUpdateInput = LocationUpdateInput;
