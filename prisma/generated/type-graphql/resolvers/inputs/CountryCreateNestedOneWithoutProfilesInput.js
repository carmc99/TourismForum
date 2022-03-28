"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryCreateNestedOneWithoutProfilesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCreateOrConnectWithoutProfilesInput_1 = require("../inputs/CountryCreateOrConnectWithoutProfilesInput");
const CountryCreateWithoutProfilesInput_1 = require("../inputs/CountryCreateWithoutProfilesInput");
const CountryWhereUniqueInput_1 = require("../inputs/CountryWhereUniqueInput");
let CountryCreateNestedOneWithoutProfilesInput = class CountryCreateNestedOneWithoutProfilesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateWithoutProfilesInput_1.CountryCreateWithoutProfilesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryCreateWithoutProfilesInput_1.CountryCreateWithoutProfilesInput)
], CountryCreateNestedOneWithoutProfilesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutProfilesInput_1.CountryCreateOrConnectWithoutProfilesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryCreateOrConnectWithoutProfilesInput_1.CountryCreateOrConnectWithoutProfilesInput)
], CountryCreateNestedOneWithoutProfilesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereUniqueInput_1.CountryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryWhereUniqueInput_1.CountryWhereUniqueInput)
], CountryCreateNestedOneWithoutProfilesInput.prototype, "connect", void 0);
CountryCreateNestedOneWithoutProfilesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryCreateNestedOneWithoutProfilesInput", {
        isAbstract: true
    })
], CountryCreateNestedOneWithoutProfilesInput);
exports.CountryCreateNestedOneWithoutProfilesInput = CountryCreateNestedOneWithoutProfilesInput;
