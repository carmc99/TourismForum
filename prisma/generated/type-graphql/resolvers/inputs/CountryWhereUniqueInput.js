"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CountryWhereUniqueInput = class CountryWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CountryWhereUniqueInput.prototype, "id", void 0);
CountryWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CountryWhereUniqueInput", {
        isAbstract: true
    })
], CountryWhereUniqueInput);
exports.CountryWhereUniqueInput = CountryWhereUniqueInput;
