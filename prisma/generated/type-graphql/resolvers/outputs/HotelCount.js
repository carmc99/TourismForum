"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let HotelCount = class HotelCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], HotelCount.prototype, "posts", void 0);
HotelCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("HotelCount", {
        isAbstract: true
    })
], HotelCount);
exports.HotelCount = HotelCount;
