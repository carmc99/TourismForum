"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelWhereInput_1 = require("../inputs/HotelWhereInput");
let HotelRelationFilter = class HotelRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelWhereInput_1.HotelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelWhereInput_1.HotelWhereInput)
], HotelRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelWhereInput_1.HotelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelWhereInput_1.HotelWhereInput)
], HotelRelationFilter.prototype, "isNot", void 0);
HotelRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("HotelRelationFilter", {
        isAbstract: true
    })
], HotelRelationFilter);
exports.HotelRelationFilter = HotelRelationFilter;
