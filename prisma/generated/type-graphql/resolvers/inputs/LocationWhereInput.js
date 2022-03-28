"use strict";
var LocationWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryRelationFilter_1 = require("../inputs/CountryRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const PostListRelationFilter_1 = require("../inputs/PostListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let LocationWhereInput = LocationWhereInput_1 = class LocationWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LocationWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LocationWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LocationWhereInput.prototype, "countryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostListRelationFilter_1.PostListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostListRelationFilter_1.PostListRelationFilter)
], LocationWhereInput.prototype, "posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryRelationFilter_1.CountryRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryRelationFilter_1.CountryRelationFilter)
], LocationWhereInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LocationWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LocationWhereInput.prototype, "updated_at", void 0);
LocationWhereInput = LocationWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationWhereInput", {
        isAbstract: true
    })
], LocationWhereInput);
exports.LocationWhereInput = LocationWhereInput;
