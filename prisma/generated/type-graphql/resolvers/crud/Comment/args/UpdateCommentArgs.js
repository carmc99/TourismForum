"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateInput_1 = require("../../../inputs/CommentUpdateInput");
const CommentWhereUniqueInput_1 = require("../../../inputs/CommentWhereUniqueInput");
let UpdateCommentArgs = class UpdateCommentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateInput_1.CommentUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateInput_1.CommentUpdateInput)
], UpdateCommentArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], UpdateCommentArgs.prototype, "where", void 0);
UpdateCommentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCommentArgs);
exports.UpdateCommentArgs = UpdateCommentArgs;
