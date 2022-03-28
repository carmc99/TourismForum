"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyHotelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelCreateManyInput_1 = require("../../../inputs/HotelCreateManyInput");
let CreateManyHotelArgs = class CreateManyHotelArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [HotelCreateManyInput_1.HotelCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyHotelArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyHotelArgs.prototype, "skipDuplicates", void 0);
CreateManyHotelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyHotelArgs);
exports.CreateManyHotelArgs = CreateManyHotelArgs;
