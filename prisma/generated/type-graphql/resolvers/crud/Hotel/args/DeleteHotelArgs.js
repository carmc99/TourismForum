"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteHotelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelWhereUniqueInput_1 = require("../../../inputs/HotelWhereUniqueInput");
let DeleteHotelArgs = class DeleteHotelArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelWhereUniqueInput_1.HotelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HotelWhereUniqueInput_1.HotelWhereUniqueInput)
], DeleteHotelArgs.prototype, "where", void 0);
DeleteHotelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteHotelArgs);
exports.DeleteHotelArgs = DeleteHotelArgs;
