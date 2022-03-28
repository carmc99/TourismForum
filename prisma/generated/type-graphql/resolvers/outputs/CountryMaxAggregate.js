"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CountryMaxAggregate = class CountryMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CountryMaxAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CountryMaxAggregate.prototype, "updated_at", void 0);
CountryMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CountryMaxAggregate", {
        isAbstract: true
    })
], CountryMaxAggregate);
exports.CountryMaxAggregate = CountryMaxAggregate;
