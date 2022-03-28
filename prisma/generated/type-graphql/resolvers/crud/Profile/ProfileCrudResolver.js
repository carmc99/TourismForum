"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateProfileArgs_1 = require("./args/AggregateProfileArgs");
const CreateManyProfileArgs_1 = require("./args/CreateManyProfileArgs");
const CreateProfileArgs_1 = require("./args/CreateProfileArgs");
const DeleteManyProfileArgs_1 = require("./args/DeleteManyProfileArgs");
const DeleteProfileArgs_1 = require("./args/DeleteProfileArgs");
const FindFirstProfileArgs_1 = require("./args/FindFirstProfileArgs");
const FindManyProfileArgs_1 = require("./args/FindManyProfileArgs");
const FindUniqueProfileArgs_1 = require("./args/FindUniqueProfileArgs");
const GroupByProfileArgs_1 = require("./args/GroupByProfileArgs");
const UpdateManyProfileArgs_1 = require("./args/UpdateManyProfileArgs");
const UpdateProfileArgs_1 = require("./args/UpdateProfileArgs");
const UpsertProfileArgs_1 = require("./args/UpsertProfileArgs");
const helpers_1 = require("../../../helpers");
const Profile_1 = require("../../../models/Profile");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProfile_1 = require("../../outputs/AggregateProfile");
const ProfileGroupBy_1 = require("../../outputs/ProfileGroupBy");
let ProfileCrudResolver = class ProfileCrudResolver {
    async profile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async profiles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateProfile(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByProfile(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Profile_1.Profile, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProfileArgs_1.FindUniqueProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "profile", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Profile_1.Profile, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProfileArgs_1.FindFirstProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "findFirstProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Profile_1.Profile], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProfileArgs_1.FindManyProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "profiles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateProfileArgs_1.CreateProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "createProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProfileArgs_1.CreateManyProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "createManyProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteProfileArgs_1.DeleteProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "deleteProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateProfileArgs_1.UpdateProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "updateProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProfileArgs_1.DeleteManyProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "deleteManyProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyProfileArgs_1.UpdateManyProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "updateManyProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertProfileArgs_1.UpsertProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "upsertProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProfile_1.AggregateProfile, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProfileArgs_1.AggregateProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "aggregateProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ProfileGroupBy_1.ProfileGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProfileArgs_1.GroupByProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileCrudResolver.prototype, "groupByProfile", null);
ProfileCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], ProfileCrudResolver);
exports.ProfileCrudResolver = ProfileCrudResolver;
