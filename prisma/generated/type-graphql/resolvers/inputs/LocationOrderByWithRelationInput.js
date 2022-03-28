"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryOrderByWithRelationInput_1 = require("../inputs/CountryOrderByWithRelationInput");
const PostOrderByRelationAggregateInput_1 = require("../inputs/PostOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LocationOrderByWithRelationInput = class LocationOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithRelationInput.prototype, "countryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput)
], LocationOrderByWithRelationInput.prototype, "posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryOrderByWithRelationInput_1.CountryOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryOrderByWithRelationInput_1.CountryOrderByWithRelationInput)
], LocationOrderByWithRelationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationOrderByWithRelationInput.prototype, "updated_at", void 0);
LocationOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationOrderByWithRelationInput", {
        isAbstract: true
    })
], LocationOrderByWithRelationInput);
exports.LocationOrderByWithRelationInput = LocationOrderByWithRelationInput;
