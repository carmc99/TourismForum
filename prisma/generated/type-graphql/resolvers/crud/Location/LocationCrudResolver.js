"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateLocationArgs_1 = require("./args/AggregateLocationArgs");
const CreateLocationArgs_1 = require("./args/CreateLocationArgs");
const CreateManyLocationArgs_1 = require("./args/CreateManyLocationArgs");
const DeleteLocationArgs_1 = require("./args/DeleteLocationArgs");
const DeleteManyLocationArgs_1 = require("./args/DeleteManyLocationArgs");
const FindFirstLocationArgs_1 = require("./args/FindFirstLocationArgs");
const FindManyLocationArgs_1 = require("./args/FindManyLocationArgs");
const FindUniqueLocationArgs_1 = require("./args/FindUniqueLocationArgs");
const GroupByLocationArgs_1 = require("./args/GroupByLocationArgs");
const UpdateLocationArgs_1 = require("./args/UpdateLocationArgs");
const UpdateManyLocationArgs_1 = require("./args/UpdateManyLocationArgs");
const UpsertLocationArgs_1 = require("./args/UpsertLocationArgs");
const helpers_1 = require("../../../helpers");
const Location_1 = require("../../../models/Location");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLocation_1 = require("../../outputs/AggregateLocation");
const LocationGroupBy_1 = require("../../outputs/LocationGroupBy");
let LocationCrudResolver = class LocationCrudResolver {
    async location(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLocation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async locations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createLocation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyLocation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteLocation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateLocation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyLocation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyLocation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertLocation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateLocation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).location.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByLocation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Location_1.Location, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLocationArgs_1.FindUniqueLocationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LocationCrudResolver.prototype, "location", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Location_1.Location, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstLocationArgs_1.FindFirstLocationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LocationCrudResolver.prototype, "findFirstLocation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Location_1.Location], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyLocationArgs_1.FindManyLocationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LocationCrudResolver.prototype, "locations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Location_1.Location, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateLocationArgs_1.CreateLocationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LocationCrudResolver.prototype, "createLocation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyLocationArgs_1.CreateManyLocationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LocationCrudResolver.prototype, "createManyLocation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Location_1.Location, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteLocationArgs_1.DeleteLocationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LocationCrudResolver.prototype, "deleteLocation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Location_1.Location, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateLocationArgs_1.UpdateLocationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LocationCrudResolver.prototype, "updateLocation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyLocationArgs_1.DeleteManyLocationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LocationCrudResolver.prototype, "deleteManyLocation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyLocationArgs_1.UpdateManyLocationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LocationCrudResolver.prototype, "updateManyLocation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Location_1.Location, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertLocationArgs_1.UpsertLocationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LocationCrudResolver.prototype, "upsertLocation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateLocation_1.AggregateLocation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateLocationArgs_1.AggregateLocationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LocationCrudResolver.prototype, "aggregateLocation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LocationGroupBy_1.LocationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByLocationArgs_1.GroupByLocationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LocationCrudResolver.prototype, "groupByLocation", null);
LocationCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Location_1.Location)
], LocationCrudResolver);
exports.LocationCrudResolver = LocationCrudResolver;
