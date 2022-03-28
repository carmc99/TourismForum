"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCreateNestedOneWithoutProfilesInput_1 = require("../inputs/CountryCreateNestedOneWithoutProfilesInput");
let ProfileCreateWithoutUserInput = class ProfileCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutUserInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutUserInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutUserInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutUserInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateNestedOneWithoutProfilesInput_1.CountryCreateNestedOneWithoutProfilesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryCreateNestedOneWithoutProfilesInput_1.CountryCreateNestedOneWithoutProfilesInput)
], ProfileCreateWithoutUserInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProfileCreateWithoutUserInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProfileCreateWithoutUserInput.prototype, "updated_at", void 0);
ProfileCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileCreateWithoutUserInput", {
        isAbstract: true
    })
], ProfileCreateWithoutUserInput);
exports.ProfileCreateWithoutUserInput = ProfileCreateWithoutUserInput;
