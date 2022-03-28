"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostAvgAggregate_1 = require("../outputs/PostAvgAggregate");
const PostCountAggregate_1 = require("../outputs/PostCountAggregate");
const PostMaxAggregate_1 = require("../outputs/PostMaxAggregate");
const PostMinAggregate_1 = require("../outputs/PostMinAggregate");
const PostSumAggregate_1 = require("../outputs/PostSumAggregate");
const Biome_1 = require("../../enums/Biome");
let PostGroupBy = class PostGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostGroupBy.prototype, "locationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Biome_1.Biome, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostGroupBy.prototype, "biome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostGroupBy.prototype, "hotelId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PostGroupBy.prototype, "average_score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PostGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PostGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCountAggregate_1.PostCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCountAggregate_1.PostCountAggregate)
], PostGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostAvgAggregate_1.PostAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostAvgAggregate_1.PostAvgAggregate)
], PostGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostSumAggregate_1.PostSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostSumAggregate_1.PostSumAggregate)
], PostGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostMinAggregate_1.PostMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostMinAggregate_1.PostMinAggregate)
], PostGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostMaxAggregate_1.PostMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostMaxAggregate_1.PostMaxAggregate)
], PostGroupBy.prototype, "_max", void 0);
PostGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PostGroupBy", {
        isAbstract: true
    })
], PostGroupBy);
exports.PostGroupBy = PostGroupBy;
