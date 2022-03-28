"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateManyWithoutPostInput_1 = require("../inputs/CommentUpdateManyWithoutPostInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumBiomeFieldUpdateOperationsInput_1 = require("../inputs/EnumBiomeFieldUpdateOperationsInput");
const HotelUpdateOneWithoutPostsInput_1 = require("../inputs/HotelUpdateOneWithoutPostsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const LocationUpdateOneRequiredWithoutPostsInput_1 = require("../inputs/LocationUpdateOneRequiredWithoutPostsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PostUpdateWithoutAuthorInput = class PostUpdateWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateOneRequiredWithoutPostsInput_1.LocationUpdateOneRequiredWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationUpdateOneRequiredWithoutPostsInput_1.LocationUpdateOneRequiredWithoutPostsInput)
], PostUpdateWithoutAuthorInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumBiomeFieldUpdateOperationsInput_1.EnumBiomeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumBiomeFieldUpdateOperationsInput_1.EnumBiomeFieldUpdateOperationsInput)
], PostUpdateWithoutAuthorInput.prototype, "biome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelUpdateOneWithoutPostsInput_1.HotelUpdateOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelUpdateOneWithoutPostsInput_1.HotelUpdateOneWithoutPostsInput)
], PostUpdateWithoutAuthorInput.prototype, "hotel", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutAuthorInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutAuthorInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutAuthorInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PostUpdateWithoutAuthorInput.prototype, "average_score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutPostInput_1.CommentUpdateManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutPostInput_1.CommentUpdateManyWithoutPostInput)
], PostUpdateWithoutAuthorInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutAuthorInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutAuthorInput.prototype, "updated_at", void 0);
PostUpdateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithoutAuthorInput", {
        isAbstract: true
    })
], PostUpdateWithoutAuthorInput);
exports.PostUpdateWithoutAuthorInput = PostUpdateWithoutAuthorInput;
