"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCountryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryOrderByWithRelationInput_1 = require("../../../inputs/CountryOrderByWithRelationInput");
const CountryWhereInput_1 = require("../../../inputs/CountryWhereInput");
const CountryWhereUniqueInput_1 = require("../../../inputs/CountryWhereUniqueInput");
const CountryScalarFieldEnum_1 = require("../../../../enums/CountryScalarFieldEnum");
let FindFirstCountryArgs = class FindFirstCountryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereInput_1.CountryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryWhereInput_1.CountryWhereInput)
], FindFirstCountryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountryOrderByWithRelationInput_1.CountryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCountryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereUniqueInput_1.CountryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryWhereUniqueInput_1.CountryWhereUniqueInput)
], FindFirstCountryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCountryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCountryArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountryScalarFieldEnum_1.CountryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCountryArgs.prototype, "distinct", void 0);
FindFirstCountryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCountryArgs);
exports.FindFirstCountryArgs = FindFirstCountryArgs;
