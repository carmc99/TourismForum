"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePostArgs_1 = require("./args/AggregatePostArgs");
const CreateManyPostArgs_1 = require("./args/CreateManyPostArgs");
const CreatePostArgs_1 = require("./args/CreatePostArgs");
const DeleteManyPostArgs_1 = require("./args/DeleteManyPostArgs");
const DeletePostArgs_1 = require("./args/DeletePostArgs");
const FindFirstPostArgs_1 = require("./args/FindFirstPostArgs");
const FindManyPostArgs_1 = require("./args/FindManyPostArgs");
const FindUniquePostArgs_1 = require("./args/FindUniquePostArgs");
const GroupByPostArgs_1 = require("./args/GroupByPostArgs");
const UpdateManyPostArgs_1 = require("./args/UpdateManyPostArgs");
const UpdatePostArgs_1 = require("./args/UpdatePostArgs");
const UpsertPostArgs_1 = require("./args/UpsertPostArgs");
const helpers_1 = require("../../../helpers");
const Post_1 = require("../../../models/Post");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePost_1 = require("../../outputs/AggregatePost");
const PostGroupBy_1 = require("../../outputs/PostGroupBy");
let PostCrudResolver = class PostCrudResolver {
    async post(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async posts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deletePost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updatePost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregatePost(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByPost(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Post_1.Post, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePostArgs_1.FindUniquePostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "post", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Post_1.Post, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPostArgs_1.FindFirstPostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "findFirstPost", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Post_1.Post], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPostArgs_1.FindManyPostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "posts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreatePostArgs_1.CreatePostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "createPost", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPostArgs_1.CreateManyPostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "createManyPost", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeletePostArgs_1.DeletePostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "deletePost", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdatePostArgs_1.UpdatePostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "updatePost", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPostArgs_1.DeleteManyPostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "deleteManyPost", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPostArgs_1.UpdateManyPostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "updateManyPost", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertPostArgs_1.UpsertPostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "upsertPost", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePost_1.AggregatePost, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePostArgs_1.AggregatePostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "aggregatePost", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PostGroupBy_1.PostGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPostArgs_1.GroupByPostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostCrudResolver.prototype, "groupByPost", null);
PostCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], PostCrudResolver);
exports.PostCrudResolver = PostCrudResolver;
