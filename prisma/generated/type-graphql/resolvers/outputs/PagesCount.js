"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PagesCount = class PagesCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PagesCount.prototype, "roles", void 0);
PagesCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PagesCount", {
        isAbstract: true
    })
], PagesCount);
exports.PagesCount = PagesCount;
