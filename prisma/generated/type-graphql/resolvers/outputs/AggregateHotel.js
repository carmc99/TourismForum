"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateHotel = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelAvgAggregate_1 = require("../outputs/HotelAvgAggregate");
const HotelCountAggregate_1 = require("../outputs/HotelCountAggregate");
const HotelMaxAggregate_1 = require("../outputs/HotelMaxAggregate");
const HotelMinAggregate_1 = require("../outputs/HotelMinAggregate");
const HotelSumAggregate_1 = require("../outputs/HotelSumAggregate");
let AggregateHotel = class AggregateHotel {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelCountAggregate_1.HotelCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelCountAggregate_1.HotelCountAggregate)
], AggregateHotel.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelAvgAggregate_1.HotelAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelAvgAggregate_1.HotelAvgAggregate)
], AggregateHotel.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelSumAggregate_1.HotelSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelSumAggregate_1.HotelSumAggregate)
], AggregateHotel.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelMinAggregate_1.HotelMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelMinAggregate_1.HotelMinAggregate)
], AggregateHotel.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelMaxAggregate_1.HotelMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelMaxAggregate_1.HotelMaxAggregate)
], AggregateHotel.prototype, "_max", void 0);
AggregateHotel = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateHotel", {
        isAbstract: true
    })
], AggregateHotel);
exports.AggregateHotel = AggregateHotel;
