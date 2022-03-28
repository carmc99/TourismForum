"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCountryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCreateInput_1 = require("../../../inputs/CountryCreateInput");
const CountryUpdateInput_1 = require("../../../inputs/CountryUpdateInput");
const CountryWhereUniqueInput_1 = require("../../../inputs/CountryWhereUniqueInput");
let UpsertCountryArgs = class UpsertCountryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereUniqueInput_1.CountryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryWhereUniqueInput_1.CountryWhereUniqueInput)
], UpsertCountryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateInput_1.CountryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryCreateInput_1.CountryCreateInput)
], UpsertCountryArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryUpdateInput_1.CountryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryUpdateInput_1.CountryUpdateInput)
], UpsertCountryArgs.prototype, "update", void 0);
UpsertCountryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertCountryArgs);
exports.UpsertCountryArgs = UpsertCountryArgs;
