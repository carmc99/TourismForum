"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LocationMaxAggregate = class LocationMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationMaxAggregate.prototype, "countryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LocationMaxAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LocationMaxAggregate.prototype, "updated_at", void 0);
LocationMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LocationMaxAggregate", {
        isAbstract: true
    })
], LocationMaxAggregate);
exports.LocationMaxAggregate = LocationMaxAggregate;
