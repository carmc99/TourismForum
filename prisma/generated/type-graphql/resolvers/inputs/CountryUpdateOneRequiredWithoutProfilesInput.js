"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryUpdateOneRequiredWithoutProfilesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCreateOrConnectWithoutProfilesInput_1 = require("../inputs/CountryCreateOrConnectWithoutProfilesInput");
const CountryCreateWithoutProfilesInput_1 = require("../inputs/CountryCreateWithoutProfilesInput");
const CountryUpdateWithoutProfilesInput_1 = require("../inputs/CountryUpdateWithoutProfilesInput");
const CountryUpsertWithoutProfilesInput_1 = require("../inputs/CountryUpsertWithoutProfilesInput");
const CountryWhereUniqueInput_1 = require("../inputs/CountryWhereUniqueInput");
let CountryUpdateOneRequiredWithoutProfilesInput = class CountryUpdateOneRequiredWithoutProfilesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateWithoutProfilesInput_1.CountryCreateWithoutProfilesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryCreateWithoutProfilesInput_1.CountryCreateWithoutProfilesInput)
], CountryUpdateOneRequiredWithoutProfilesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutProfilesInput_1.CountryCreateOrConnectWithoutProfilesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryCreateOrConnectWithoutProfilesInput_1.CountryCreateOrConnectWithoutProfilesInput)
], CountryUpdateOneRequiredWithoutProfilesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryUpsertWithoutProfilesInput_1.CountryUpsertWithoutProfilesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryUpsertWithoutProfilesInput_1.CountryUpsertWithoutProfilesInput)
], CountryUpdateOneRequiredWithoutProfilesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereUniqueInput_1.CountryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryWhereUniqueInput_1.CountryWhereUniqueInput)
], CountryUpdateOneRequiredWithoutProfilesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryUpdateWithoutProfilesInput_1.CountryUpdateWithoutProfilesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryUpdateWithoutProfilesInput_1.CountryUpdateWithoutProfilesInput)
], CountryUpdateOneRequiredWithoutProfilesInput.prototype, "update", void 0);
CountryUpdateOneRequiredWithoutProfilesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryUpdateOneRequiredWithoutProfilesInput", {
        isAbstract: true
    })
], CountryUpdateOneRequiredWithoutProfilesInput);
exports.CountryUpdateOneRequiredWithoutProfilesInput = CountryUpdateOneRequiredWithoutProfilesInput;
