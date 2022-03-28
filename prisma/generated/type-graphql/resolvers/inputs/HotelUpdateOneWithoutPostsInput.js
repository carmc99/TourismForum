"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelUpdateOneWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelCreateOrConnectWithoutPostsInput_1 = require("../inputs/HotelCreateOrConnectWithoutPostsInput");
const HotelCreateWithoutPostsInput_1 = require("../inputs/HotelCreateWithoutPostsInput");
const HotelUpdateWithoutPostsInput_1 = require("../inputs/HotelUpdateWithoutPostsInput");
const HotelUpsertWithoutPostsInput_1 = require("../inputs/HotelUpsertWithoutPostsInput");
const HotelWhereUniqueInput_1 = require("../inputs/HotelWhereUniqueInput");
let HotelUpdateOneWithoutPostsInput = class HotelUpdateOneWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelCreateWithoutPostsInput_1.HotelCreateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelCreateWithoutPostsInput_1.HotelCreateWithoutPostsInput)
], HotelUpdateOneWithoutPostsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelCreateOrConnectWithoutPostsInput_1.HotelCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelCreateOrConnectWithoutPostsInput_1.HotelCreateOrConnectWithoutPostsInput)
], HotelUpdateOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelUpsertWithoutPostsInput_1.HotelUpsertWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelUpsertWithoutPostsInput_1.HotelUpsertWithoutPostsInput)
], HotelUpdateOneWithoutPostsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], HotelUpdateOneWithoutPostsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], HotelUpdateOneWithoutPostsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelWhereUniqueInput_1.HotelWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelWhereUniqueInput_1.HotelWhereUniqueInput)
], HotelUpdateOneWithoutPostsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelUpdateWithoutPostsInput_1.HotelUpdateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelUpdateWithoutPostsInput_1.HotelUpdateWithoutPostsInput)
], HotelUpdateOneWithoutPostsInput.prototype, "update", void 0);
HotelUpdateOneWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HotelUpdateOneWithoutPostsInput", {
        isAbstract: true
    })
], HotelUpdateOneWithoutPostsInput);
exports.HotelUpdateOneWithoutPostsInput = HotelUpdateOneWithoutPostsInput;
