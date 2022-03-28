"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateWithoutCountryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutProfileInput_1 = require("../inputs/UserCreateNestedOneWithoutProfileInput");
let ProfileCreateWithoutCountryInput = class ProfileCreateWithoutCountryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutCountryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutCountryInput.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutCountryInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutCountryInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileCreateWithoutCountryInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProfileInput_1.UserCreateNestedOneWithoutProfileInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutProfileInput_1.UserCreateNestedOneWithoutProfileInput)
], ProfileCreateWithoutCountryInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProfileCreateWithoutCountryInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProfileCreateWithoutCountryInput.prototype, "updated_at", void 0);
ProfileCreateWithoutCountryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileCreateWithoutCountryInput", {
        isAbstract: true
    })
], ProfileCreateWithoutCountryInput);
exports.ProfileCreateWithoutCountryInput = ProfileCreateWithoutCountryInput;
