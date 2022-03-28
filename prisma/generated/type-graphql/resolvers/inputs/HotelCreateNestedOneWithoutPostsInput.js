"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelCreateNestedOneWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelCreateOrConnectWithoutPostsInput_1 = require("../inputs/HotelCreateOrConnectWithoutPostsInput");
const HotelCreateWithoutPostsInput_1 = require("../inputs/HotelCreateWithoutPostsInput");
const HotelWhereUniqueInput_1 = require("../inputs/HotelWhereUniqueInput");
let HotelCreateNestedOneWithoutPostsInput = class HotelCreateNestedOneWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelCreateWithoutPostsInput_1.HotelCreateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelCreateWithoutPostsInput_1.HotelCreateWithoutPostsInput)
], HotelCreateNestedOneWithoutPostsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelCreateOrConnectWithoutPostsInput_1.HotelCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelCreateOrConnectWithoutPostsInput_1.HotelCreateOrConnectWithoutPostsInput)
], HotelCreateNestedOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelWhereUniqueInput_1.HotelWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelWhereUniqueInput_1.HotelWhereUniqueInput)
], HotelCreateNestedOneWithoutPostsInput.prototype, "connect", void 0);
HotelCreateNestedOneWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HotelCreateNestedOneWithoutPostsInput", {
        isAbstract: true
    })
], HotelCreateNestedOneWithoutPostsInput);
exports.HotelCreateNestedOneWithoutPostsInput = HotelCreateNestedOneWithoutPostsInput;
