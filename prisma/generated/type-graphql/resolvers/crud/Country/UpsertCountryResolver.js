"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCountryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertCountryArgs_1 = require("./args/UpsertCountryArgs");
const Country_1 = require("../../../models/Country");
const helpers_1 = require("../../../helpers");
let UpsertCountryResolver = class UpsertCountryResolver {
    async upsertCountry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).country.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Country_1.Country, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCountryArgs_1.UpsertCountryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertCountryResolver.prototype, "upsertCountry", null);
UpsertCountryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Country_1.Country)
], UpsertCountryResolver);
exports.UpsertCountryResolver = UpsertCountryResolver;
