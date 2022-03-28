"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCountAggregate_1 = require("../outputs/CountryCountAggregate");
const CountryMaxAggregate_1 = require("../outputs/CountryMaxAggregate");
const CountryMinAggregate_1 = require("../outputs/CountryMinAggregate");
let CountryGroupBy = class CountryGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CountryGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CountryGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CountryGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CountryGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCountAggregate_1.CountryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryCountAggregate_1.CountryCountAggregate)
], CountryGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryMinAggregate_1.CountryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryMinAggregate_1.CountryMinAggregate)
], CountryGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryMaxAggregate_1.CountryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryMaxAggregate_1.CountryMaxAggregate)
], CountryGroupBy.prototype, "_max", void 0);
CountryGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CountryGroupBy", {
        isAbstract: true
    })
], CountryGroupBy);
exports.CountryGroupBy = CountryGroupBy;
