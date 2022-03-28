"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithoutHotelInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateManyWithoutPostInput_1 = require("../inputs/CommentUpdateManyWithoutPostInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumBiomeFieldUpdateOperationsInput_1 = require("../inputs/EnumBiomeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const LocationUpdateOneRequiredWithoutPostsInput_1 = require("../inputs/LocationUpdateOneRequiredWithoutPostsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutPostsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPostsInput");
let PostUpdateWithoutHotelInput = class PostUpdateWithoutHotelInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutHotelInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsInput_1.UserUpdateOneRequiredWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutPostsInput_1.UserUpdateOneRequiredWithoutPostsInput)
], PostUpdateWithoutHotelInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateOneRequiredWithoutPostsInput_1.LocationUpdateOneRequiredWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationUpdateOneRequiredWithoutPostsInput_1.LocationUpdateOneRequiredWithoutPostsInput)
], PostUpdateWithoutHotelInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumBiomeFieldUpdateOperationsInput_1.EnumBiomeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumBiomeFieldUpdateOperationsInput_1.EnumBiomeFieldUpdateOperationsInput)
], PostUpdateWithoutHotelInput.prototype, "biome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutHotelInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutHotelInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutHotelInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PostUpdateWithoutHotelInput.prototype, "average_score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutPostInput_1.CommentUpdateManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutPostInput_1.CommentUpdateManyWithoutPostInput)
], PostUpdateWithoutHotelInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutHotelInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutHotelInput.prototype, "updated_at", void 0);
PostUpdateWithoutHotelInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithoutHotelInput", {
        isAbstract: true
    })
], PostUpdateWithoutHotelInput);
exports.PostUpdateWithoutHotelInput = PostUpdateWithoutHotelInput;
