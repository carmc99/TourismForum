"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCountAggregate_1 = require("../outputs/LocationCountAggregate");
const LocationMaxAggregate_1 = require("../outputs/LocationMaxAggregate");
const LocationMinAggregate_1 = require("../outputs/LocationMinAggregate");
let LocationGroupBy = class LocationGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationGroupBy.prototype, "countryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], LocationGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], LocationGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCountAggregate_1.LocationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCountAggregate_1.LocationCountAggregate)
], LocationGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationMinAggregate_1.LocationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationMinAggregate_1.LocationMinAggregate)
], LocationGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationMaxAggregate_1.LocationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationMaxAggregate_1.LocationMaxAggregate)
], LocationGroupBy.prototype, "_max", void 0);
LocationGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LocationGroupBy", {
        isAbstract: true
    })
], LocationGroupBy);
exports.LocationGroupBy = LocationGroupBy;
