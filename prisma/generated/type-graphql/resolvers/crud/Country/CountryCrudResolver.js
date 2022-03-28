"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCountryArgs_1 = require("./args/AggregateCountryArgs");
const CreateCountryArgs_1 = require("./args/CreateCountryArgs");
const CreateManyCountryArgs_1 = require("./args/CreateManyCountryArgs");
const DeleteCountryArgs_1 = require("./args/DeleteCountryArgs");
const DeleteManyCountryArgs_1 = require("./args/DeleteManyCountryArgs");
const FindFirstCountryArgs_1 = require("./args/FindFirstCountryArgs");
const FindManyCountryArgs_1 = require("./args/FindManyCountryArgs");
const FindUniqueCountryArgs_1 = require("./args/FindUniqueCountryArgs");
const GroupByCountryArgs_1 = require("./args/GroupByCountryArgs");
const UpdateCountryArgs_1 = require("./args/UpdateCountryArgs");
const UpdateManyCountryArgs_1 = require("./args/UpdateManyCountryArgs");
const UpsertCountryArgs_1 = require("./args/UpsertCountryArgs");
const helpers_1 = require("../../../helpers");
const Country_1 = require("../../../models/Country");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCountry_1 = require("../../outputs/AggregateCountry");
const CountryGroupBy_1 = require("../../outputs/CountryGroupBy");
let CountryCrudResolver = class CountryCrudResolver {
    async country(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).country.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCountry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).country.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async countries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).country.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createCountry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).country.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyCountry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).country.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteCountry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).country.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateCountry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).country.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCountry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).country.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyCountry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).country.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertCountry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).country.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateCountry(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).country.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByCountry(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).country.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
], CountryCrudResolver.prototype, "country", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Country_1.Country, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCountryArgs_1.FindFirstCountryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountryCrudResolver.prototype, "findFirstCountry", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Country_1.Country], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCountryArgs_1.FindManyCountryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountryCrudResolver.prototype, "countries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Country_1.Country, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCountryArgs_1.CreateCountryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountryCrudResolver.prototype, "createCountry", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCountryArgs_1.CreateManyCountryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountryCrudResolver.prototype, "createManyCountry", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Country_1.Country, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCountryArgs_1.DeleteCountryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountryCrudResolver.prototype, "deleteCountry", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Country_1.Country, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCountryArgs_1.UpdateCountryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountryCrudResolver.prototype, "updateCountry", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCountryArgs_1.DeleteManyCountryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountryCrudResolver.prototype, "deleteManyCountry", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCountryArgs_1.UpdateManyCountryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountryCrudResolver.prototype, "updateManyCountry", null);
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
], CountryCrudResolver.prototype, "upsertCountry", null);
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
], CountryCrudResolver.prototype, "aggregateCountry", null);
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
], CountryCrudResolver.prototype, "groupByCountry", null);
CountryCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Country_1.Country)
], CountryCrudResolver);
exports.CountryCrudResolver = CountryCrudResolver;
