"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateNestedManyWithoutCountryInput_1 = require("../inputs/LocationCreateNestedManyWithoutCountryInput");
const ProfileCreateNestedManyWithoutCountryInput_1 = require("../inputs/ProfileCreateNestedManyWithoutCountryInput");
let CountryCreateInput = class CountryCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CountryCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreateNestedManyWithoutCountryInput_1.ProfileCreateNestedManyWithoutCountryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCreateNestedManyWithoutCountryInput_1.ProfileCreateNestedManyWithoutCountryInput)
], CountryCreateInput.prototype, "profiles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutCountryInput_1.LocationCreateNestedManyWithoutCountryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateNestedManyWithoutCountryInput_1.LocationCreateNestedManyWithoutCountryInput)
], CountryCreateInput.prototype, "locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CountryCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CountryCreateInput.prototype, "updated_at", void 0);
CountryCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryCreateInput", {
        isAbstract: true
    })
], CountryCreateInput);
exports.CountryCreateInput = CountryCreateInput;
