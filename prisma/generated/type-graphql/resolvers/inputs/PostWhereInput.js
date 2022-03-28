"use strict";
var PostWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentListRelationFilter_1 = require("../inputs/CommentListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumBiomeFilter_1 = require("../inputs/EnumBiomeFilter");
const HotelRelationFilter_1 = require("../inputs/HotelRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const LocationRelationFilter_1 = require("../inputs/LocationRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let PostWhereInput = PostWhereInput_1 = class PostWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], PostWhereInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostWhereInput.prototype, "locationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationRelationFilter_1.LocationRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationRelationFilter_1.LocationRelationFilter)
], PostWhereInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumBiomeFilter_1.EnumBiomeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumBiomeFilter_1.EnumBiomeFilter)
], PostWhereInput.prototype, "biome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], PostWhereInput.prototype, "hotelId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelRelationFilter_1.HotelRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelRelationFilter_1.HotelRelationFilter)
], PostWhereInput.prototype, "hotel", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PostWhereInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], PostWhereInput.prototype, "average_score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentListRelationFilter_1.CommentListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentListRelationFilter_1.CommentListRelationFilter)
], PostWhereInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PostWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PostWhereInput.prototype, "updated_at", void 0);
PostWhereInput = PostWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("PostWhereInput", {
        isAbstract: true
    })
], PostWhereInput);
exports.PostWhereInput = PostWhereInput;
