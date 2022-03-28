"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const HotelCreateNestedOneWithoutPostsInput_1 = require("../inputs/HotelCreateNestedOneWithoutPostsInput");
const LocationCreateNestedOneWithoutPostsInput_1 = require("../inputs/LocationCreateNestedOneWithoutPostsInput");
const UserCreateNestedOneWithoutPostsInput_1 = require("../inputs/UserCreateNestedOneWithoutPostsInput");
const Biome_1 = require("../../enums/Biome");
let PostCreateWithoutCommentsInput = class PostCreateWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutCommentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPostsInput_1.UserCreateNestedOneWithoutPostsInput)
], PostCreateWithoutCommentsInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutPostsInput_1.LocationCreateNestedOneWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationCreateNestedOneWithoutPostsInput_1.LocationCreateNestedOneWithoutPostsInput)
], PostCreateWithoutCommentsInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Biome_1.Biome, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutCommentsInput.prototype, "biome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => HotelCreateNestedOneWithoutPostsInput_1.HotelCreateNestedOneWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", HotelCreateNestedOneWithoutPostsInput_1.HotelCreateNestedOneWithoutPostsInput)
], PostCreateWithoutCommentsInput.prototype, "hotel", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutCommentsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutCommentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutCommentsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PostCreateWithoutCommentsInput.prototype, "average_score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateWithoutCommentsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateWithoutCommentsInput.prototype, "updated_at", void 0);
PostCreateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateWithoutCommentsInput", {
        isAbstract: true
    })
], PostCreateWithoutCommentsInput);
exports.PostCreateWithoutCommentsInput = PostCreateWithoutCommentsInput;
