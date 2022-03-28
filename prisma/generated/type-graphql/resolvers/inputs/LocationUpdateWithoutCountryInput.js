"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateWithoutCountryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PostUpdateManyWithoutLocationInput_1 = require("../inputs/PostUpdateManyWithoutLocationInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LocationUpdateWithoutCountryInput = class LocationUpdateWithoutCountryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateWithoutCountryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LocationUpdateWithoutCountryInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutLocationInput_1.PostUpdateManyWithoutLocationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutLocationInput_1.PostUpdateManyWithoutLocationInput)
], LocationUpdateWithoutCountryInput.prototype, "posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LocationUpdateWithoutCountryInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LocationUpdateWithoutCountryInput.prototype, "updated_at", void 0);
LocationUpdateWithoutCountryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpdateWithoutCountryInput", {
        isAbstract: true
    })
], LocationUpdateWithoutCountryInput);
exports.LocationUpdateWithoutCountryInput = LocationUpdateWithoutCountryInput;
