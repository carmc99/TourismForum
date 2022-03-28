"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let HotelWhereUniqueInput = class HotelWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HotelWhereUniqueInput.prototype, "id", void 0);
HotelWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HotelWhereUniqueInput", {
        isAbstract: true
    })
], HotelWhereUniqueInput);
exports.HotelWhereUniqueInput = HotelWhereUniqueInput;
