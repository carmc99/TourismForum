"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateInput_1 = require("../../../inputs/CommentCreateInput");
let CreateCommentArgs = class CreateCommentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateInput_1.CommentCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateInput_1.CommentCreateInput)
], CreateCommentArgs.prototype, "data", void 0);
CreateCommentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCommentArgs);
exports.CreateCommentArgs = CreateCommentArgs;
