"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentAvgAggregate = class CommentAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CommentAvgAggregate.prototype, "score", void 0);
CommentAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentAvgAggregate", {
        isAbstract: true
    })
], CommentAvgAggregate);
exports.CommentAvgAggregate = CommentAvgAggregate;
