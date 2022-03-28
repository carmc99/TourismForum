"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCountryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByCountryArgs_1 = require("./args/GroupByCountryArgs");
const Country_1 = require("../../../models/Country");
const CountryGroupBy_1 = require("../../outputs/CountryGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCountryResolver = class GroupByCountryResolver {
    async groupByCountry(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).country.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CountryGroupBy_1.CountryGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCountryArgs_1.GroupByCountryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCountryResolver.prototype, "groupByCountry", null);
GroupByCountryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Country_1.Country)
], GroupByCountryResolver);
exports.GroupByCountryResolver = GroupByCountryResolver;
