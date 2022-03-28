"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentSumAggregate = class CommentSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CommentSumAggregate.prototype, "score", void 0);
CommentSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentSumAggregate", {
        isAbstract: true
    })
], CommentSumAggregate);
exports.CommentSumAggregate = CommentSumAggregate;
