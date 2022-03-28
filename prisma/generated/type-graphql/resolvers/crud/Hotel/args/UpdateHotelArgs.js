"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHotelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelUpdateInput_1 = require("../../../inputs/HotelUpdateInput");
const HotelWhereUniqueInput_1 = require("../../../inputs/HotelWhereUniqueInput");
let UpdateHotelArgs = class UpdateHotelArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelUpdateInput_1.HotelUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HotelUpdateInput_1.HotelUpdateInput)
], UpdateHotelArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelWhereUniqueInput_1.HotelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HotelWhereUniqueInput_1.HotelWhereUniqueInput)
], UpdateHotelArgs.prototype, "where", void 0);
UpdateHotelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateHotelArgs);
exports.UpdateHotelArgs = UpdateHotelArgs;
