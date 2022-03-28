"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryUpsertWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCreateWithoutLocationsInput_1 = require("../inputs/CountryCreateWithoutLocationsInput");
const CountryUpdateWithoutLocationsInput_1 = require("../inputs/CountryUpdateWithoutLocationsInput");
let CountryUpsertWithoutLocationsInput = class CountryUpsertWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryUpdateWithoutLocationsInput_1.CountryUpdateWithoutLocationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryUpdateWithoutLocationsInput_1.CountryUpdateWithoutLocationsInput)
], CountryUpsertWithoutLocationsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateWithoutLocationsInput_1.CountryCreateWithoutLocationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryCreateWithoutLocationsInput_1.CountryCreateWithoutLocationsInput)
], CountryUpsertWithoutLocationsInput.prototype, "create", void 0);
CountryUpsertWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryUpsertWithoutLocationsInput", {
        isAbstract: true
    })
], CountryUpsertWithoutLocationsInput);
exports.CountryUpsertWithoutLocationsInput = CountryUpsertWithoutLocationsInput;
