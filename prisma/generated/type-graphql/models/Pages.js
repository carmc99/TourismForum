"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pages = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesCount_1 = require("../resolvers/outputs/PagesCount");
let Pages = class Pages {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Pages.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Pages.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Pages.prototype, "path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Pages.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Pages.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesCount_1.PagesCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesCount_1.PagesCount)
], Pages.prototype, "_count", void 0);
Pages = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Pages", {
        isAbstract: true
    })
], Pages);
exports.Pages = Pages;
