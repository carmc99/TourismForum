"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileWhereInput_1 = require("../inputs/ProfileWhereInput");
let ProfileListRelationFilter = class ProfileListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereInput_1.ProfileWhereInput)
], ProfileListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereInput_1.ProfileWhereInput)
], ProfileListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileWhereInput_1.ProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileWhereInput_1.ProfileWhereInput)
], ProfileListRelationFilter.prototype, "none", void 0);
ProfileListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileListRelationFilter", {
        isAbstract: true
    })
], ProfileListRelationFilter);
exports.ProfileListRelationFilter = ProfileListRelationFilter;
