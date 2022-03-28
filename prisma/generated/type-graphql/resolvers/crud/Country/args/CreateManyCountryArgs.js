"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCountryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CountryCreateManyInput_1 = require("../../../inputs/CountryCreateManyInput");
let CreateManyCountryArgs = class CreateManyCountryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CountryCreateManyInput_1.CountryCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCountryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCountryArgs.prototype, "skipDuplicates", void 0);
CreateManyCountryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCountryArgs);
exports.CreateManyCountryArgs = CreateManyCountryArgs;
