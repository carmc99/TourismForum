"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let HotelSumAggregate = class HotelSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], HotelSumAggregate.prototype, "price_per_night", void 0);
HotelSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("HotelSumAggregate", {
        isAbstract: true
    })
], HotelSumAggregate);
exports.HotelSumAggregate = HotelSumAggregate;
