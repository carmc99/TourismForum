"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CountryMinAggregate = class CountryMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CountryMinAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CountryMinAggregate.prototype, "updated_at", void 0);
CountryMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CountryMinAggregate", {
        isAbstract: true
    })
], CountryMinAggregate);
exports.CountryMinAggregate = CountryMinAggregate;
