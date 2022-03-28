"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertHotelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelCreateInput_1 = require("../../../inputs/HotelCreateInput");
const HotelUpdateInput_1 = require("../../../inputs/HotelUpdateInput");
const HotelWhereUniqueInput_1 = require("../../../inputs/HotelWhereUniqueInput");
let UpsertHotelArgs = class UpsertHotelArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelWhereUniqueInput_1.HotelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HotelWhereUniqueInput_1.HotelWhereUniqueInput)
], UpsertHotelArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelCreateInput_1.HotelCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HotelCreateInput_1.HotelCreateInput)
], UpsertHotelArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelUpdateInput_1.HotelUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HotelUpdateInput_1.HotelUpdateInput)
], UpsertHotelArgs.prototype, "update", void 0);
UpsertHotelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertHotelArgs);
exports.UpsertHotelArgs = UpsertHotelArgs;
