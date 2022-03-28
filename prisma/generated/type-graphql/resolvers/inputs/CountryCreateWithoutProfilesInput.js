"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryCreateWithoutProfilesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateNestedManyWithoutCountryInput_1 = require("../inputs/LocationCreateNestedManyWithoutCountryInput");
let CountryCreateWithoutProfilesInput = class CountryCreateWithoutProfilesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryCreateWithoutProfilesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CountryCreateWithoutProfilesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutCountryInput_1.LocationCreateNestedManyWithoutCountryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateNestedManyWithoutCountryInput_1.LocationCreateNestedManyWithoutCountryInput)
], CountryCreateWithoutProfilesInput.prototype, "locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CountryCreateWithoutProfilesInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CountryCreateWithoutProfilesInput.prototype, "updated_at", void 0);
CountryCreateWithoutProfilesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryCreateWithoutProfilesInput", {
        isAbstract: true
    })
], CountryCreateWithoutProfilesInput);
exports.CountryCreateWithoutProfilesInput = CountryCreateWithoutProfilesInput;
