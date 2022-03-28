"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLocation = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCountAggregate_1 = require("../outputs/LocationCountAggregate");
const LocationMaxAggregate_1 = require("../outputs/LocationMaxAggregate");
const LocationMinAggregate_1 = require("../outputs/LocationMinAggregate");
let AggregateLocation = class AggregateLocation {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCountAggregate_1.LocationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCountAggregate_1.LocationCountAggregate)
], AggregateLocation.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationMinAggregate_1.LocationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationMinAggregate_1.LocationMinAggregate)
], AggregateLocation.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationMaxAggregate_1.LocationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationMaxAggregate_1.LocationMaxAggregate)
], AggregateLocation.prototype, "_max", void 0);
AggregateLocation = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateLocation", {
        isAbstract: true
    })
], AggregateLocation);
exports.AggregateLocation = AggregateLocation;
