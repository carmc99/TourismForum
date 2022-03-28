"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let HotelAvgAggregate = class HotelAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], HotelAvgAggregate.prototype, "price_per_night", void 0);
HotelAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("HotelAvgAggregate", {
        isAbstract: true
    })
], HotelAvgAggregate);
exports.HotelAvgAggregate = HotelAvgAggregate;
