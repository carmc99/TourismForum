"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedOneWithoutCommentsInput_1 = require("../inputs/PostCreateNestedOneWithoutCommentsInput");
const UserCreateNestedOneWithoutCommentsInput_1 = require("../inputs/UserCreateNestedOneWithoutCommentsInput");
let CommentCreateInput = class CommentCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCommentsInput_1.UserCreateNestedOneWithoutCommentsInput)
], CommentCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCommentsInput_1.PostCreateNestedOneWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateNestedOneWithoutCommentsInput_1.PostCreateNestedOneWithoutCommentsInput)
], CommentCreateInput.prototype, "post", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CommentCreateInput.prototype, "score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateInput.prototype, "updated_at", void 0);
CommentCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateInput", {
        isAbstract: true
    })
], CommentCreateInput);
exports.CommentCreateInput = CommentCreateInput;
