"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutPostInput_1 = require("../inputs/CommentCreateNestedManyWithoutPostInput");
const HotelCreateNestedOneWithoutPostsInput_1 = require("../inputs/HotelCreateNestedOneWithoutPostsInput");
const LocationCreateNestedOneWithoutPostsInput_1 = require("../inputs/LocationCreateNestedOneWithoutPostsInput");
const Biome_1 = require("../../enums/Biome");
let PostCreateWithoutAuthorInput = class PostCreateWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutPostsInput_1.LocationCreateNestedOneWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationCreateNestedOneWithoutPostsInput_1.LocationCreateNestedOneWithoutPostsInput)
], PostCreateWithoutAuthorInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Biome_1.Biome, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutAuthorInput.prototype, "biome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelCreateNestedOneWithoutPostsInput_1.HotelCreateNestedOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelCreateNestedOneWithoutPostsInput_1.HotelCreateNestedOneWithoutPostsInput)
], PostCreateWithoutAuthorInput.prototype, "hotel", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutAuthorInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutAuthorInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutAuthorInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PostCreateWithoutAuthorInput.prototype, "average_score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput)
], PostCreateWithoutAuthorInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateWithoutAuthorInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateWithoutAuthorInput.prototype, "updated_at", void 0);
PostCreateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateWithoutAuthorInput", {
        isAbstract: true
    })
], PostCreateWithoutAuthorInput);
exports.PostCreateWithoutAuthorInput = PostCreateWithoutAuthorInput;
