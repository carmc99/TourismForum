"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueHotelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelWhereUniqueInput_1 = require("../../../inputs/HotelWhereUniqueInput");
let FindUniqueHotelArgs = class FindUniqueHotelArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelWhereUniqueInput_1.HotelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HotelWhereUniqueInput_1.HotelWhereUniqueInput)
], FindUniqueHotelArgs.prototype, "where", void 0);
FindUniqueHotelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueHotelArgs);
exports.FindUniqueHotelArgs = FindUniqueHotelArgs;
