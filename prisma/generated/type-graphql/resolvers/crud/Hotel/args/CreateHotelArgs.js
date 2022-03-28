"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHotelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelCreateInput_1 = require("../../../inputs/HotelCreateInput");
let CreateHotelArgs = class CreateHotelArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelCreateInput_1.HotelCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HotelCreateInput_1.HotelCreateInput)
], CreateHotelArgs.prototype, "data", void 0);
CreateHotelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateHotelArgs);
exports.CreateHotelArgs = CreateHotelArgs;
