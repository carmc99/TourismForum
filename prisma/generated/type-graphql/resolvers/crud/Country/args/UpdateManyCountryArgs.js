"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCountryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryUpdateManyMutationInput_1 = require("../../../inputs/CountryUpdateManyMutationInput");
const CountryWhereInput_1 = require("../../../inputs/CountryWhereInput");
let UpdateManyCountryArgs = class UpdateManyCountryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryUpdateManyMutationInput_1.CountryUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryUpdateManyMutationInput_1.CountryUpdateManyMutationInput)
], UpdateManyCountryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereInput_1.CountryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CountryWhereInput_1.CountryWhereInput)
], UpdateManyCountryArgs.prototype, "where", void 0);
UpdateManyCountryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCountryArgs);
exports.UpdateManyCountryArgs = UpdateManyCountryArgs;
