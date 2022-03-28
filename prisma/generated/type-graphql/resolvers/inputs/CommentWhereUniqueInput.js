"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentWhereUniqueInput = class CommentWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentWhereUniqueInput.prototype, "id", void 0);
CommentWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentWhereUniqueInput", {
        isAbstract: true
    })
], CommentWhereUniqueInput);
exports.CommentWhereUniqueInput = CommentWhereUniqueInput;
