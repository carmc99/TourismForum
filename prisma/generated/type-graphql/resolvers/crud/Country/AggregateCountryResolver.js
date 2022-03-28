"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCountryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCountryArgs_1 = require("./args/AggregateCountryArgs");
const Country_1 = require("../../../models/Country");
const AggregateCountry_1 = require("../../outputs/AggregateCountry");
const helpers_1 = require("../../../helpers");
let AggregateCountryResolver = class AggregateCountryResolver {
    async aggregateCountry(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).country.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCountry_1.AggregateCountry, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCountryArgs_1.AggregateCountryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCountryResolver.prototype, "aggregateCountry", null);
AggregateCountryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Country_1.Country)
], AggregateCountryResolver);
exports.AggregateCountryResolver = AggregateCountryResolver;
