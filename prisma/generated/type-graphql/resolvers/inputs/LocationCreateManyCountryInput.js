"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateManyCountryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LocationCreateManyCountryInput = class LocationCreateManyCountryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateManyCountryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateManyCountryInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LocationCreateManyCountryInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LocationCreateManyCountryInput.prototype, "updated_at", void 0);
LocationCreateManyCountryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateManyCountryInput", {
        isAbstract: true
    })
], LocationCreateManyCountryInput);
exports.LocationCreateManyCountryInput = LocationCreateManyCountryInput;
