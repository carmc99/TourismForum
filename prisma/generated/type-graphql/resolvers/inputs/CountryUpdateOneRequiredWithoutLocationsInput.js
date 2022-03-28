"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryUpdateOneRequiredWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCreateOrConnectWithoutLocationsInput_1 = require("../inputs/CountryCreateOrConnectWithoutLocationsInput");
const CountryCreateWithoutLocationsInput_1 = require("../inputs/CountryCreateWithoutLocationsInput");
const CountryUpdateWithoutLocationsInput_1 = require("../inputs/CountryUpdateWithoutLocationsInput");
const CountryUpsertWithoutLocationsInput_1 = require("../inputs/CountryUpsertWithoutLocationsInput");
const CountryWhereUniqueInput_1 = require("../inputs/CountryWhereUniqueInput");
let CountryUpdateOneRequiredWithoutLocationsInput = class CountryUpdateOneRequiredWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateWithoutLocationsInput_1.CountryCreateWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryCreateWithoutLocationsInput_1.CountryCreateWithoutLocationsInput)
], CountryUpdateOneRequiredWithoutLocationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutLocationsInput_1.CountryCreateOrConnectWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryCreateOrConnectWithoutLocationsInput_1.CountryCreateOrConnectWithoutLocationsInput)
], CountryUpdateOneRequiredWithoutLocationsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryUpsertWithoutLocationsInput_1.CountryUpsertWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryUpsertWithoutLocationsInput_1.CountryUpsertWithoutLocationsInput)
], CountryUpdateOneRequiredWithoutLocationsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereUniqueInput_1.CountryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryWhereUniqueInput_1.CountryWhereUniqueInput)
], CountryUpdateOneRequiredWithoutLocationsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryUpdateWithoutLocationsInput_1.CountryUpdateWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryUpdateWithoutLocationsInput_1.CountryUpdateWithoutLocationsInput)
], CountryUpdateOneRequiredWithoutLocationsInput.prototype, "update", void 0);
CountryUpdateOneRequiredWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryUpdateOneRequiredWithoutLocationsInput", {
        isAbstract: true
    })
], CountryUpdateOneRequiredWithoutLocationsInput);
exports.CountryUpdateOneRequiredWithoutLocationsInput = CountryUpdateOneRequiredWithoutLocationsInput;
