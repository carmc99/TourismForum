"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCreateNestedOneWithoutLocationsInput_1 = require("../inputs/CountryCreateNestedOneWithoutLocationsInput");
const PostCreateNestedManyWithoutLocationInput_1 = require("../inputs/PostCreateNestedManyWithoutLocationInput");
let LocationCreateInput = class LocationCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutLocationInput_1.PostCreateNestedManyWithoutLocationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutLocationInput_1.PostCreateNestedManyWithoutLocationInput)
], LocationCreateInput.prototype, "posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateNestedOneWithoutLocationsInput_1.CountryCreateNestedOneWithoutLocationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryCreateNestedOneWithoutLocationsInput_1.CountryCreateNestedOneWithoutLocationsInput)
], LocationCreateInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LocationCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LocationCreateInput.prototype, "updated_at", void 0);
LocationCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateInput", {
        isAbstract: true
    })
], LocationCreateInput);
exports.LocationCreateInput = LocationCreateInput;
