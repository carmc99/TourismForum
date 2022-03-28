"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCountryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCreateInput_1 = require("../../../inputs/CountryCreateInput");
let CreateCountryArgs = class CreateCountryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CountryCreateInput_1.CountryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CountryCreateInput_1.CountryCreateInput)
], CreateCountryArgs.prototype, "data", void 0);
CreateCountryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCountryArgs);
exports.CreateCountryArgs = CreateCountryArgs;
