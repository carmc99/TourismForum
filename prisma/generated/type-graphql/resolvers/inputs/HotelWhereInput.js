"use strict";
var HotelWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const PostListRelationFilter_1 = require("../inputs/PostListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let HotelWhereInput = HotelWhereInput_1 = class HotelWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HotelWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HotelWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HotelWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HotelWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HotelWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HotelWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], HotelWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], HotelWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], HotelWhereInput.prototype, "price_per_night", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], HotelWhereInput.prototype, "lunch_included", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], HotelWhereInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostListRelationFilter_1.PostListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostListRelationFilter_1.PostListRelationFilter)
], HotelWhereInput.prototype, "posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], HotelWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], HotelWhereInput.prototype, "updated_at", void 0);
HotelWhereInput = HotelWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("HotelWhereInput", {
        isAbstract: true
    })
], HotelWhereInput);
exports.HotelWhereInput = HotelWhereInput;
