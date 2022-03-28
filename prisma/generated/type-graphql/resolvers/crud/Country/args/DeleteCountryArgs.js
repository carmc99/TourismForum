"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCountryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryWhereUniqueInput_1 = require("../../../inputs/CountryWhereUniqueInput");
let DeleteCountryArgs = class DeleteCountryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereUniqueInput_1.CountryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryWhereUniqueInput_1.CountryWhereUniqueInput)
], DeleteCountryArgs.prototype, "where", void 0);
DeleteCountryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCountryArgs);
exports.DeleteCountryArgs = DeleteCountryArgs;
