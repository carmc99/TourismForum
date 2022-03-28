"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelCreateOrConnectWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelCreateWithoutPostsInput_1 = require("../inputs/HotelCreateWithoutPostsInput");
const HotelWhereUniqueInput_1 = require("../inputs/HotelWhereUniqueInput");
let HotelCreateOrConnectWithoutPostsInput = class HotelCreateOrConnectWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelWhereUniqueInput_1.HotelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HotelWhereUniqueInput_1.HotelWhereUniqueInput)
], HotelCreateOrConnectWithoutPostsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelCreateWithoutPostsInput_1.HotelCreateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HotelCreateWithoutPostsInput_1.HotelCreateWithoutPostsInput)
], HotelCreateOrConnectWithoutPostsInput.prototype, "create", void 0);
HotelCreateOrConnectWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HotelCreateOrConnectWithoutPostsInput", {
        isAbstract: true
    })
], HotelCreateOrConnectWithoutPostsInput);
exports.HotelCreateOrConnectWithoutPostsInput = HotelCreateOrConnectWithoutPostsInput;
