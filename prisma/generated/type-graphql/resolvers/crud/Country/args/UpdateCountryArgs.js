"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCountryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryUpdateInput_1 = require("../../../inputs/CountryUpdateInput");
const CountryWhereUniqueInput_1 = require("../../../inputs/CountryWhereUniqueInput");
let UpdateCountryArgs = class UpdateCountryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryUpdateInput_1.CountryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryUpdateInput_1.CountryUpdateInput)
], UpdateCountryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryWhereUniqueInput_1.CountryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryWhereUniqueInput_1.CountryWhereUniqueInput)
], UpdateCountryArgs.prototype, "where", void 0);
UpdateCountryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCountryArgs);
exports.UpdateCountryArgs = UpdateCountryArgs;
