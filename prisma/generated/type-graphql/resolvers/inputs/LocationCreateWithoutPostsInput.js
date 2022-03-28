"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCreateNestedOneWithoutLocationsInput_1 = require("../inputs/CountryCreateNestedOneWithoutLocationsInput");
let LocationCreateWithoutPostsInput = class LocationCreateWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateWithoutPostsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateWithoutPostsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateNestedOneWithoutLocationsInput_1.CountryCreateNestedOneWithoutLocationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryCreateNestedOneWithoutLocationsInput_1.CountryCreateNestedOneWithoutLocationsInput)
], LocationCreateWithoutPostsInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LocationCreateWithoutPostsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LocationCreateWithoutPostsInput.prototype, "updated_at", void 0);
LocationCreateWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateWithoutPostsInput", {
        isAbstract: true
    })
], LocationCreateWithoutPostsInput);
exports.LocationCreateWithoutPostsInput = LocationCreateWithoutPostsInput;
