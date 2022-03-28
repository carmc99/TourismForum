"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCountryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryOrderByWithAggregationInput_1 = require("../../../inputs/CountryOrderByWithAggregationInput");
const CountryScalarWhereWithAggregatesInput_1 = require("../../../inputs/CountryScalarWhereWithAggregatesInput");
const CountryWhereInput_1 = require("../../../inputs/CountryWhereInput");
const CountryScalarFieldEnum_1 = require("../../../../enums/CountryScalarFieldEnum");
let GroupByCountryArgs = class GroupByCountryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereInput_1.CountryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryWhereInput_1.CountryWhereInput)
], GroupByCountryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountryOrderByWithAggregationInput_1.CountryOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCountryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountryScalarFieldEnum_1.CountryScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCountryArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryScalarWhereWithAggregatesInput_1.CountryScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryScalarWhereWithAggregatesInput_1.CountryScalarWhereWithAggregatesInput)
], GroupByCountryArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCountryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCountryArgs.prototype, "skip", void 0);
GroupByCountryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCountryArgs);
exports.GroupByCountryArgs = GroupByCountryArgs;
