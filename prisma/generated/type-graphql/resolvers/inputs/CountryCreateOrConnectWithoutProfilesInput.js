"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryCreateOrConnectWithoutProfilesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCreateWithoutProfilesInput_1 = require("../inputs/CountryCreateWithoutProfilesInput");
const CountryWhereUniqueInput_1 = require("../inputs/CountryWhereUniqueInput");
let CountryCreateOrConnectWithoutProfilesInput = class CountryCreateOrConnectWithoutProfilesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereUniqueInput_1.CountryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryWhereUniqueInput_1.CountryWhereUniqueInput)
], CountryCreateOrConnectWithoutProfilesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateWithoutProfilesInput_1.CountryCreateWithoutProfilesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryCreateWithoutProfilesInput_1.CountryCreateWithoutProfilesInput)
], CountryCreateOrConnectWithoutProfilesInput.prototype, "create", void 0);
CountryCreateOrConnectWithoutProfilesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryCreateOrConnectWithoutProfilesInput", {
        isAbstract: true
    })
], CountryCreateOrConnectWithoutProfilesInput);
exports.CountryCreateOrConnectWithoutProfilesInput = CountryCreateOrConnectWithoutProfilesInput;
