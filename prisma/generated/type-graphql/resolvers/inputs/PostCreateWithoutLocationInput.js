"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutPostInput_1 = require("../inputs/CommentCreateNestedManyWithoutPostInput");
const HotelCreateNestedOneWithoutPostsInput_1 = require("../inputs/HotelCreateNestedOneWithoutPostsInput");
const UserCreateNestedOneWithoutPostsInput_1 = require("../inputs/UserCreateNestedOneWithoutPostsInput");
const Biome_1 = require("../../enums/Biome");
let PostCreateWithoutLocationInput = class PostCreateWithoutLocationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutLocationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput)
], PostCreateWithoutLocationInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Biome_1.Biome, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutLocationInput.prototype, "biome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelCreateNestedOneWithoutPostsInput_1.HotelCreateNestedOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelCreateNestedOneWithoutPostsInput_1.HotelCreateNestedOneWithoutPostsInput)
], PostCreateWithoutLocationInput.prototype, "hotel", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutLocationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutLocationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutLocationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PostCreateWithoutLocationInput.prototype, "average_score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutPostInput_1.CommentCreateNestedManyWithoutPostInput)
], PostCreateWithoutLocationInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateWithoutLocationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateWithoutLocationInput.prototype, "updated_at", void 0);
PostCreateWithoutLocationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateWithoutLocationInput", {
        isAbstract: true
    })
], PostCreateWithoutLocationInput);
exports.PostCreateWithoutLocationInput = PostCreateWithoutLocationInput;
