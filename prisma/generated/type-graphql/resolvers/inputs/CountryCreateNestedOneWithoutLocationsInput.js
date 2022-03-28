"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryCreateNestedOneWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCreateOrConnectWithoutLocationsInput_1 = require("../inputs/CountryCreateOrConnectWithoutLocationsInput");
const CountryCreateWithoutLocationsInput_1 = require("../inputs/CountryCreateWithoutLocationsInput");
const CountryWhereUniqueInput_1 = require("../inputs/CountryWhereUniqueInput");
let CountryCreateNestedOneWithoutLocationsInput = class CountryCreateNestedOneWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateWithoutLocationsInput_1.CountryCreateWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryCreateWithoutLocationsInput_1.CountryCreateWithoutLocationsInput)
], CountryCreateNestedOneWithoutLocationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutLocationsInput_1.CountryCreateOrConnectWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryCreateOrConnectWithoutLocationsInput_1.CountryCreateOrConnectWithoutLocationsInput)
], CountryCreateNestedOneWithoutLocationsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereUniqueInput_1.CountryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryWhereUniqueInput_1.CountryWhereUniqueInput)
], CountryCreateNestedOneWithoutLocationsInput.prototype, "connect", void 0);
CountryCreateNestedOneWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryCreateNestedOneWithoutLocationsInput", {
        isAbstract: true
    })
], CountryCreateNestedOneWithoutLocationsInput);
exports.CountryCreateNestedOneWithoutLocationsInput = CountryCreateNestedOneWithoutLocationsInput;
