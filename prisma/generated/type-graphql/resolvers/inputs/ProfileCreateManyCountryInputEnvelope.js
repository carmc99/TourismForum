"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateManyCountryInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreateManyCountryInput_1 = require("../inputs/ProfileCreateManyCountryInput");
let ProfileCreateManyCountryInputEnvelope = class ProfileCreateManyCountryInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileCreateManyCountryInput_1.ProfileCreateManyCountryInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileCreateManyCountryInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ProfileCreateManyCountryInputEnvelope.prototype, "skipDuplicates", void 0);
ProfileCreateManyCountryInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileCreateManyCountryInputEnvelope", {
        isAbstract: true
    })
], ProfileCreateManyCountryInputEnvelope);
exports.ProfileCreateManyCountryInputEnvelope = ProfileCreateManyCountryInputEnvelope;
