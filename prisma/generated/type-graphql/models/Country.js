"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCount_1 = require("../resolvers/outputs/CountryCount");
let Country = class Country {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Country.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Country.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Country.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Country.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCount_1.CountryCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryCount_1.CountryCount)
], Country.prototype, "_count", void 0);
Country = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Country", {
        isAbstract: true
    })
], Country);
exports.Country = Country;
