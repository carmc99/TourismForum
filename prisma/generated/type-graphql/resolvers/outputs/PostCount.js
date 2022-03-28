"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostCount = class PostCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PostCount.prototype, "comments", void 0);
PostCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PostCount", {
        isAbstract: true
    })
], PostCount);
exports.PostCount = PostCount;
