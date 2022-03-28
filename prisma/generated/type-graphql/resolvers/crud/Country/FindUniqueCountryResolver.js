"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCountryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueCountryArgs_1 = require("./args/FindUniqueCountryArgs");
const Country_1 = require("../../../models/Country");
const helpers_1 = require("../../../helpers");
let FindUniqueCountryResolver = class FindUniqueCountryResolver {
    async country(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).country.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Country_1.Country, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCountryArgs_1.FindUniqueCountryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCountryResolver.prototype, "country", null);
FindUniqueCountryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Country_1.Country)
], FindUniqueCountryResolver);
exports.FindUniqueCountryResolver = FindUniqueCountryResolver;
