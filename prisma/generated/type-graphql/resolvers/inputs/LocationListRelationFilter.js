"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationWhereInput_1 = require("../inputs/LocationWhereInput");
let LocationListRelationFilter = class LocationListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereInput_1.LocationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationWhereInput_1.LocationWhereInput)
], LocationListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereInput_1.LocationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationWhereInput_1.LocationWhereInput)
], LocationListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereInput_1.LocationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationWhereInput_1.LocationWhereInput)
], LocationListRelationFilter.prototype, "none", void 0);
LocationListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationListRelationFilter", {
        isAbstract: true
    })
], LocationListRelationFilter);
exports.LocationListRelationFilter = LocationListRelationFilter;
