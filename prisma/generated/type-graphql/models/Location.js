"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCount_1 = require("../resolvers/outputs/LocationCount");
let Location = class Location {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Location.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Location.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Location.prototype, "countryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Location.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Location.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCount_1.LocationCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCount_1.LocationCount)
], Location.prototype, "_count", void 0);
Location = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Location", {
        isAbstract: true
    })
], Location);
exports.Location = Location;
