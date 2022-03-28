"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstHotelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelOrderByWithRelationInput_1 = require("../../../inputs/HotelOrderByWithRelationInput");
const HotelWhereInput_1 = require("../../../inputs/HotelWhereInput");
const HotelWhereUniqueInput_1 = require("../../../inputs/HotelWhereUniqueInput");
const HotelScalarFieldEnum_1 = require("../../../../enums/HotelScalarFieldEnum");
let FindFirstHotelArgs = class FindFirstHotelArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelWhereInput_1.HotelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelWhereInput_1.HotelWhereInput)
], FindFirstHotelArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HotelOrderByWithRelationInput_1.HotelOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstHotelArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelWhereUniqueInput_1.HotelWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelWhereUniqueInput_1.HotelWhereUniqueInput)
], FindFirstHotelArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstHotelArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstHotelArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HotelScalarFieldEnum_1.HotelScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstHotelArgs.prototype, "distinct", void 0);
FindFirstHotelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstHotelArgs);
exports.FindFirstHotelArgs = FindFirstHotelArgs;
