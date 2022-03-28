"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCount_1 = require("../resolvers/outputs/RoleCount");
let Role = class Role {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCount_1.RoleCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCount_1.RoleCount)
], Role.prototype, "_count", void 0);
Role = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Role", {
        isAbstract: true
    })
], Role);
exports.Role = Role;
