"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProfileWhereUniqueInput = class ProfileWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileWhereUniqueInput.prototype, "userId", void 0);
ProfileWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileWhereUniqueInput", {
        isAbstract: true
    })
], ProfileWhereUniqueInput);
exports.ProfileWhereUniqueInput = ProfileWhereUniqueInput;
