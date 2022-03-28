"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelUpsertWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelCreateWithoutPostsInput_1 = require("../inputs/HotelCreateWithoutPostsInput");
const HotelUpdateWithoutPostsInput_1 = require("../inputs/HotelUpdateWithoutPostsInput");
let HotelUpsertWithoutPostsInput = class HotelUpsertWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelUpdateWithoutPostsInput_1.HotelUpdateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HotelUpdateWithoutPostsInput_1.HotelUpdateWithoutPostsInput)
], HotelUpsertWithoutPostsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelCreateWithoutPostsInput_1.HotelCreateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", HotelCreateWithoutPostsInput_1.HotelCreateWithoutPostsInput)
], HotelUpsertWithoutPostsInput.prototype, "create", void 0);
HotelUpsertWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HotelUpsertWithoutPostsInput", {
        isAbstract: true
    })
], HotelUpsertWithoutPostsInput);
exports.HotelUpsertWithoutPostsInput = HotelUpsertWithoutPostsInput;
