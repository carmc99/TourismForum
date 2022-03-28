"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RoleCount = class RoleCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RoleCount.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RoleCount.prototype, "pages", void 0);
RoleCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoleCount", {
        isAbstract: true
    })
], RoleCount);
exports.RoleCount = RoleCount;
