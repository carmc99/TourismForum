"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByHotelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelOrderByWithAggregationInput_1 = require("../../../inputs/HotelOrderByWithAggregationInput");
const HotelScalarWhereWithAggregatesInput_1 = require("../../../inputs/HotelScalarWhereWithAggregatesInput");
const HotelWhereInput_1 = require("../../../inputs/HotelWhereInput");
const HotelScalarFieldEnum_1 = require("../../../../enums/HotelScalarFieldEnum");
let GroupByHotelArgs = class GroupByHotelArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelWhereInput_1.HotelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelWhereInput_1.HotelWhereInput)
], GroupByHotelArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HotelOrderByWithAggregationInput_1.HotelOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByHotelArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HotelScalarFieldEnum_1.HotelScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByHotelArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelScalarWhereWithAggregatesInput_1.HotelScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelScalarWhereWithAggregatesInput_1.HotelScalarWhereWithAggregatesInput)
], GroupByHotelArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByHotelArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByHotelArgs.prototype, "skip", void 0);
GroupByHotelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByHotelArgs);
exports.GroupByHotelArgs = GroupByHotelArgs;
