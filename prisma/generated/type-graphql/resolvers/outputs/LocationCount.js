"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LocationCount = class LocationCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LocationCount.prototype, "posts", void 0);
LocationCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LocationCount", {
        isAbstract: true
    })
], LocationCount);
exports.LocationCount = LocationCount;
