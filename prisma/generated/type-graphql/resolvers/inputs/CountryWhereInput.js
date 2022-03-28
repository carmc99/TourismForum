"use strict";
var CountryWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const LocationListRelationFilter_1 = require("../inputs/LocationListRelationFilter");
const ProfileListRelationFilter_1 = require("../inputs/ProfileListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let CountryWhereInput = CountryWhereInput_1 = class CountryWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CountryWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CountryWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CountryWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CountryWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CountryWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileListRelationFilter_1.ProfileListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileListRelationFilter_1.ProfileListRelationFilter)
], CountryWhereInput.prototype, "profiles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationListRelationFilter_1.LocationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationListRelationFilter_1.LocationListRelationFilter)
], CountryWhereInput.prototype, "locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CountryWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CountryWhereInput.prototype, "updated_at", void 0);
CountryWhereInput = CountryWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryWhereInput", {
        isAbstract: true
    })
], CountryWhereInput);
exports.CountryWhereInput = CountryWhereInput;
