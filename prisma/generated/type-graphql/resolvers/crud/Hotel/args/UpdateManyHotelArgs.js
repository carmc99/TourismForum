"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyHotelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelUpdateManyMutationInput_1 = require("../../../inputs/HotelUpdateManyMutationInput");
const HotelWhereInput_1 = require("../../../inputs/HotelWhereInput");
let UpdateManyHotelArgs = class UpdateManyHotelArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelUpdateManyMutationInput_1.HotelUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HotelUpdateManyMutationInput_1.HotelUpdateManyMutationInput)
], UpdateManyHotelArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelWhereInput_1.HotelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelWhereInput_1.HotelWhereInput)
], UpdateManyHotelArgs.prototype, "where", void 0);
UpdateManyHotelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyHotelArgs);
exports.UpdateManyHotelArgs = UpdateManyHotelArgs;
