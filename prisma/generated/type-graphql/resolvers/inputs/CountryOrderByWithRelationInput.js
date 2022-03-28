"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationOrderByRelationAggregateInput_1 = require("../inputs/LocationOrderByRelationAggregateInput");
const ProfileOrderByRelationAggregateInput_1 = require("../inputs/ProfileOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CountryOrderByWithRelationInput = class CountryOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileOrderByRelationAggregateInput_1.ProfileOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileOrderByRelationAggregateInput_1.ProfileOrderByRelationAggregateInput)
], CountryOrderByWithRelationInput.prototype, "profiles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationOrderByRelationAggregateInput_1.LocationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationOrderByRelationAggregateInput_1.LocationOrderByRelationAggregateInput)
], CountryOrderByWithRelationInput.prototype, "locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryOrderByWithRelationInput.prototype, "updated_at", void 0);
CountryOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryOrderByWithRelationInput", {
        isAbstract: true
    })
], CountryOrderByWithRelationInput);
exports.CountryOrderByWithRelationInput = CountryOrderByWithRelationInput;
