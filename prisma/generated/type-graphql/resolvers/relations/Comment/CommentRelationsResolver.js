"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comment_1 = require("../../../models/Comment");
const Post_1 = require("../../../models/Post");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let CommentRelationsResolver = class CommentRelationsResolver {
    async user(comment, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findUnique({
            where: {
                id: comment.id,
            },
        }).user({});
    }
    async post(comment, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).comment.findUnique({
            where: {
                id: comment.id,
            },
        }).post({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Comment_1.Comment, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Post_1.Post, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Comment_1.Comment, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommentRelationsResolver.prototype, "post", null);
CommentRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Comment_1.Comment)
], CommentRelationsResolver);
exports.CommentRelationsResolver = CommentRelationsResolver;
