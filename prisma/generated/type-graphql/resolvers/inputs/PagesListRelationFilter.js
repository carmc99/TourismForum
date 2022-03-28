"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesWhereInput_1 = require("../inputs/PagesWhereInput");
let PagesListRelationFilter = class PagesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereInput_1.PagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesWhereInput_1.PagesWhereInput)
], PagesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereInput_1.PagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesWhereInput_1.PagesWhereInput)
], PagesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereInput_1.PagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesWhereInput_1.PagesWhereInput)
], PagesListRelationFilter.prototype, "none", void 0);
PagesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesListRelationFilter", {
        isAbstract: true
    })
], PagesListRelationFilter);
exports.PagesListRelationFilter = PagesListRelationFilter;
