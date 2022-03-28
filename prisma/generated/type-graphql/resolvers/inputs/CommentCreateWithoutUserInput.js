"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedOneWithoutCommentsInput_1 = require("../inputs/PostCreateNestedOneWithoutCommentsInput");
let CommentCreateWithoutUserInput = class CommentCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCommentsInput_1.PostCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateNestedOneWithoutCommentsInput_1.PostCreateNestedOneWithoutCommentsInput)
], CommentCreateWithoutUserInput.prototype, "post", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateWithoutUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CommentCreateWithoutUserInput.prototype, "score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutUserInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateWithoutUserInput.prototype, "updated_at", void 0);
CommentCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateWithoutUserInput", {
        isAbstract: true
    })
], CommentCreateWithoutUserInput);
exports.CommentCreateWithoutUserInput = CommentCreateWithoutUserInput;
