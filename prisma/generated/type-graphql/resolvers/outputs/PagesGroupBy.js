"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesCountAggregate_1 = require("../outputs/PagesCountAggregate");
const PagesMaxAggregate_1 = require("../outputs/PagesMaxAggregate");
const PagesMinAggregate_1 = require("../outputs/PagesMinAggregate");
let PagesGroupBy = class PagesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PagesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PagesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PagesGroupBy.prototype, "path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PagesGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PagesGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesCountAggregate_1.PagesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesCountAggregate_1.PagesCountAggregate)
], PagesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesMinAggregate_1.PagesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesMinAggregate_1.PagesMinAggregate)
], PagesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesMaxAggregate_1.PagesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesMaxAggregate_1.PagesMaxAggregate)
], PagesGroupBy.prototype, "_max", void 0);
PagesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PagesGroupBy", {
        isAbstract: true
    })
], PagesGroupBy);
exports.PagesGroupBy = PagesGroupBy;
