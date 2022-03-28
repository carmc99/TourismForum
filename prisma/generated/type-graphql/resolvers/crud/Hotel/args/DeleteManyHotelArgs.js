"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyHotelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelWhereInput_1 = require("../../../inputs/HotelWhereInput");
let DeleteManyHotelArgs = class DeleteManyHotelArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelWhereInput_1.HotelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelWhereInput_1.HotelWhereInput)
], DeleteManyHotelArgs.prototype, "where", void 0);
DeleteManyHotelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyHotelArgs);
exports.DeleteManyHotelArgs = DeleteManyHotelArgs;
