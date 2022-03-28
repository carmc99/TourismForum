"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CountryCount = class CountryCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CountryCount.prototype, "profiles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CountryCount.prototype, "locations", void 0);
CountryCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CountryCount", {
        isAbstract: true
    })
], CountryCount);
exports.CountryCount = CountryCount;
