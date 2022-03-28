"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelAvgAggregate_1 = require("../outputs/HotelAvgAggregate");
const HotelCountAggregate_1 = require("../outputs/HotelCountAggregate");
const HotelMaxAggregate_1 = require("../outputs/HotelMaxAggregate");
const HotelMinAggregate_1 = require("../outputs/HotelMinAggregate");
const HotelSumAggregate_1 = require("../outputs/HotelSumAggregate");
let HotelGroupBy = class HotelGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], HotelGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], HotelGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], HotelGroupBy.prototype, "price_per_night", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], HotelGroupBy.prototype, "lunch_included", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], HotelGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], HotelGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], HotelGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelCountAggregate_1.HotelCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelCountAggregate_1.HotelCountAggregate)
], HotelGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelAvgAggregate_1.HotelAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelAvgAggregate_1.HotelAvgAggregate)
], HotelGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelSumAggregate_1.HotelSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelSumAggregate_1.HotelSumAggregate)
], HotelGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelMinAggregate_1.HotelMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelMinAggregate_1.HotelMinAggregate)
], HotelGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelMaxAggregate_1.HotelMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelMaxAggregate_1.HotelMaxAggregate)
], HotelGroupBy.prototype, "_max", void 0);
HotelGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("HotelGroupBy", {
        isAbstract: true
    })
], HotelGroupBy);
exports.HotelGroupBy = HotelGroupBy;
