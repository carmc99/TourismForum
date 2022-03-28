"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCountryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryWhereInput_1 = require("../../../inputs/CountryWhereInput");
let DeleteManyCountryArgs = class DeleteManyCountryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereInput_1.CountryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryWhereInput_1.CountryWhereInput)
], DeleteManyCountryArgs.prototype, "where", void 0);
DeleteManyCountryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCountryArgs);
exports.DeleteManyCountryArgs = DeleteManyCountryArgs;
