"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryCreateOrConnectWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCreateWithoutLocationsInput_1 = require("../inputs/CountryCreateWithoutLocationsInput");
const CountryWhereUniqueInput_1 = require("../inputs/CountryWhereUniqueInput");
let CountryCreateOrConnectWithoutLocationsInput = class CountryCreateOrConnectWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereUniqueInput_1.CountryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryWhereUniqueInput_1.CountryWhereUniqueInput)
], CountryCreateOrConnectWithoutLocationsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateWithoutLocationsInput_1.CountryCreateWithoutLocationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryCreateWithoutLocationsInput_1.CountryCreateWithoutLocationsInput)
], CountryCreateOrConnectWithoutLocationsInput.prototype, "create", void 0);
CountryCreateOrConnectWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryCreateOrConnectWithoutLocationsInput", {
        isAbstract: true
    })
], CountryCreateOrConnectWithoutLocationsInput);
exports.CountryCreateOrConnectWithoutLocationsInput = CountryCreateOrConnectWithoutLocationsInput;
