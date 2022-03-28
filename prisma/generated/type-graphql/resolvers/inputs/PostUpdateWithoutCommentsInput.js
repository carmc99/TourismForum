"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumBiomeFieldUpdateOperationsInput_1 = require("../inputs/EnumBiomeFieldUpdateOperationsInput");
const HotelUpdateOneWithoutPostsInput_1 = require("../inputs/HotelUpdateOneWithoutPostsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const LocationUpdateOneRequiredWithoutPostsInput_1 = require("../inputs/LocationUpdateOneRequiredWithoutPostsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutPostsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPostsInput");
let PostUpdateWithoutCommentsInput = class PostUpdateWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsInput_1.UserUpdateOneRequiredWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutPostsInput_1.UserUpdateOneRequiredWithoutPostsInput)
], PostUpdateWithoutCommentsInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateOneRequiredWithoutPostsInput_1.LocationUpdateOneRequiredWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationUpdateOneRequiredWithoutPostsInput_1.LocationUpdateOneRequiredWithoutPostsInput)
], PostUpdateWithoutCommentsInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumBiomeFieldUpdateOperationsInput_1.EnumBiomeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumBiomeFieldUpdateOperationsInput_1.EnumBiomeFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "biome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelUpdateOneWithoutPostsInput_1.HotelUpdateOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelUpdateOneWithoutPostsInput_1.HotelUpdateOneWithoutPostsInput)
], PostUpdateWithoutCommentsInput.prototype, "hotel", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "average_score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "updated_at", void 0);
PostUpdateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithoutCommentsInput", {
        isAbstract: true
    })
], PostUpdateWithoutCommentsInput);
exports.PostUpdateWithoutCommentsInput = PostUpdateWithoutCommentsInput;
