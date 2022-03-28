"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCountry = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCountAggregate_1 = require("../outputs/CountryCountAggregate");
const CountryMaxAggregate_1 = require("../outputs/CountryMaxAggregate");
const CountryMinAggregate_1 = require("../outputs/CountryMinAggregate");
let AggregateCountry = class AggregateCountry {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCountAggregate_1.CountryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryCountAggregate_1.CountryCountAggregate)
], AggregateCountry.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryMinAggregate_1.CountryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryMinAggregate_1.CountryMinAggregate)
], AggregateCountry.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryMaxAggregate_1.CountryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryMaxAggregate_1.CountryMaxAggregate)
], AggregateCountry.prototype, "_max", void 0);
AggregateCountry = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCountry", {
        isAbstract: true
    })
], AggregateCountry);
exports.AggregateCountry = AggregateCountry;
