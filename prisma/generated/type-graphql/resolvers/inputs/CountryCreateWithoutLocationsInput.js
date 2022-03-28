"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryCreateWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreateNestedManyWithoutCountryInput_1 = require("../inputs/ProfileCreateNestedManyWithoutCountryInput");
let CountryCreateWithoutLocationsInput = class CountryCreateWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryCreateWithoutLocationsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CountryCreateWithoutLocationsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreateNestedManyWithoutCountryInput_1.ProfileCreateNestedManyWithoutCountryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCreateNestedManyWithoutCountryInput_1.ProfileCreateNestedManyWithoutCountryInput)
], CountryCreateWithoutLocationsInput.prototype, "profiles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CountryCreateWithoutLocationsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CountryCreateWithoutLocationsInput.prototype, "updated_at", void 0);
CountryCreateWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryCreateWithoutLocationsInput", {
        isAbstract: true
    })
], CountryCreateWithoutLocationsInput);
exports.CountryCreateWithoutLocationsInput = CountryCreateWithoutLocationsInput;
