"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePages = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesCountAggregate_1 = require("../outputs/PagesCountAggregate");
const PagesMaxAggregate_1 = require("../outputs/PagesMaxAggregate");
const PagesMinAggregate_1 = require("../outputs/PagesMinAggregate");
let AggregatePages = class AggregatePages {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesCountAggregate_1.PagesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesCountAggregate_1.PagesCountAggregate)
], AggregatePages.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesMinAggregate_1.PagesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesMinAggregate_1.PagesMinAggregate)
], AggregatePages.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesMaxAggregate_1.PagesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesMaxAggregate_1.PagesMaxAggregate)
], AggregatePages.prototype, "_max", void 0);
AggregatePages = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePages", {
        isAbstract: true
    })
], AggregatePages);
exports.AggregatePages = AggregatePages;
