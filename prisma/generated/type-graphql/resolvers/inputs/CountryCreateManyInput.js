"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CountryCreateManyInput = class CountryCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CountryCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CountryCreateManyInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CountryCreateManyInput.prototype, "updated_at", void 0);
CountryCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryCreateManyInput", {
        isAbstract: true
    })
], CountryCreateManyInput);
exports.CountryCreateManyInput = CountryCreateManyInput;
