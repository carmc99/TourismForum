"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryWhereInput_1 = require("../inputs/CountryWhereInput");
let CountryRelationFilter = class CountryRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereInput_1.CountryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryWhereInput_1.CountryWhereInput)
], CountryRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereInput_1.CountryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryWhereInput_1.CountryWhereInput)
], CountryRelationFilter.prototype, "isNot", void 0);
CountryRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryRelationFilter", {
        isAbstract: true
    })
], CountryRelationFilter);
exports.CountryRelationFilter = CountryRelationFilter;
