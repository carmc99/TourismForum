"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateHotelArgs_1 = require("./args/AggregateHotelArgs");
const CreateHotelArgs_1 = require("./args/CreateHotelArgs");
const CreateManyHotelArgs_1 = require("./args/CreateManyHotelArgs");
const DeleteHotelArgs_1 = require("./args/DeleteHotelArgs");
const DeleteManyHotelArgs_1 = require("./args/DeleteManyHotelArgs");
const FindFirstHotelArgs_1 = require("./args/FindFirstHotelArgs");
const FindManyHotelArgs_1 = require("./args/FindManyHotelArgs");
const FindUniqueHotelArgs_1 = require("./args/FindUniqueHotelArgs");
const GroupByHotelArgs_1 = require("./args/GroupByHotelArgs");
const UpdateHotelArgs_1 = require("./args/UpdateHotelArgs");
const UpdateManyHotelArgs_1 = require("./args/UpdateManyHotelArgs");
const UpsertHotelArgs_1 = require("./args/UpsertHotelArgs");
const helpers_1 = require("../../../helpers");
const Hotel_1 = require("../../../models/Hotel");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateHotel_1 = require("../../outputs/AggregateHotel");
const HotelGroupBy_1 = require("../../outputs/HotelGroupBy");
let HotelCrudResolver = class HotelCrudResolver {
    async hotel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstHotel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async hotels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createHotel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyHotel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteHotel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateHotel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyHotel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyHotel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertHotel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateHotel(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByHotel(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Hotel_1.Hotel, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueHotelArgs_1.FindUniqueHotelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HotelCrudResolver.prototype, "hotel", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Hotel_1.Hotel, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstHotelArgs_1.FindFirstHotelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HotelCrudResolver.prototype, "findFirstHotel", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Hotel_1.Hotel], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyHotelArgs_1.FindManyHotelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HotelCrudResolver.prototype, "hotels", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Hotel_1.Hotel, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateHotelArgs_1.CreateHotelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HotelCrudResolver.prototype, "createHotel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyHotelArgs_1.CreateManyHotelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HotelCrudResolver.prototype, "createManyHotel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Hotel_1.Hotel, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteHotelArgs_1.DeleteHotelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HotelCrudResolver.prototype, "deleteHotel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Hotel_1.Hotel, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateHotelArgs_1.UpdateHotelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HotelCrudResolver.prototype, "updateHotel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyHotelArgs_1.DeleteManyHotelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HotelCrudResolver.prototype, "deleteManyHotel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyHotelArgs_1.UpdateManyHotelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HotelCrudResolver.prototype, "updateManyHotel", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Hotel_1.Hotel, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertHotelArgs_1.UpsertHotelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HotelCrudResolver.prototype, "upsertHotel", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateHotel_1.AggregateHotel, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateHotelArgs_1.AggregateHotelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HotelCrudResolver.prototype, "aggregateHotel", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [HotelGroupBy_1.HotelGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByHotelArgs_1.GroupByHotelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HotelCrudResolver.prototype, "groupByHotel", null);
HotelCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Hotel_1.Hotel)
], HotelCrudResolver);
exports.HotelCrudResolver = HotelCrudResolver;
