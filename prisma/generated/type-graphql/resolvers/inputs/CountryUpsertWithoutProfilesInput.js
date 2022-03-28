"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryUpsertWithoutProfilesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCreateWithoutProfilesInput_1 = require("../inputs/CountryCreateWithoutProfilesInput");
const CountryUpdateWithoutProfilesInput_1 = require("../inputs/CountryUpdateWithoutProfilesInput");
let CountryUpsertWithoutProfilesInput = class CountryUpsertWithoutProfilesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryUpdateWithoutProfilesInput_1.CountryUpdateWithoutProfilesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryUpdateWithoutProfilesInput_1.CountryUpdateWithoutProfilesInput)
], CountryUpsertWithoutProfilesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateWithoutProfilesInput_1.CountryCreateWithoutProfilesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryCreateWithoutProfilesInput_1.CountryCreateWithoutProfilesInput)
], CountryUpsertWithoutProfilesInput.prototype, "create", void 0);
CountryUpsertWithoutProfilesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryUpsertWithoutProfilesInput", {
        isAbstract: true
    })
], CountryUpsertWithoutProfilesInput);
exports.CountryUpsertWithoutProfilesInput = CountryUpsertWithoutProfilesInput;
