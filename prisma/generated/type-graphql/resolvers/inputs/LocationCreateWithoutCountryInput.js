"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateWithoutCountryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedManyWithoutLocationInput_1 = require("../inputs/PostCreateNestedManyWithoutLocationInput");
let LocationCreateWithoutCountryInput = class LocationCreateWithoutCountryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateWithoutCountryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LocationCreateWithoutCountryInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutLocationInput_1.PostCreateNestedManyWithoutLocationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutLocationInput_1.PostCreateNestedManyWithoutLocationInput)
], LocationCreateWithoutCountryInput.prototype, "posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LocationCreateWithoutCountryInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LocationCreateWithoutCountryInput.prototype, "updated_at", void 0);
LocationCreateWithoutCountryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateWithoutCountryInput", {
        isAbstract: true
    })
], LocationCreateWithoutCountryInput);
exports.LocationCreateWithoutCountryInput = LocationCreateWithoutCountryInput;
