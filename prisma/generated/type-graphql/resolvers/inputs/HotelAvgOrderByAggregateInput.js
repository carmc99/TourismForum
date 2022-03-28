"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let HotelAvgOrderByAggregateInput = class HotelAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HotelAvgOrderByAggregateInput.prototype, "price_per_night", void 0);
HotelAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HotelAvgOrderByAggregateInput", {
        isAbstract: true
    })
], HotelAvgOrderByAggregateInput);
exports.HotelAvgOrderByAggregateInput = HotelAvgOrderByAggregateInput;
