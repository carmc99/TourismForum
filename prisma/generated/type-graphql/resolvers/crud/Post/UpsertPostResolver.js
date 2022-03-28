"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertPostResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertPostArgs_1 = require("./args/UpsertPostArgs");
const Post_1 = require("../../../models/Post");
const helpers_1 = require("../../../helpers");
let UpsertPostResolver = class UpsertPostResolver {
    async upsertPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).post.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertPostResolver.prototype, "upsertPost", null);
UpsertPostResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], UpsertPostResolver);
exports.UpsertPostResolver = UpsertPostResolver;
