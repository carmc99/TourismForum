"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comment_1 = require("../../../models/Comment");
const Hotel_1 = require("../../../models/Hotel");
const Location_1 = require("../../../models/Location");
const Post_1 = require("../../../models/Post");
const User_1 = require("../../../models/User");
const PostCommentsArgs_1 = require("./args/PostCommentsArgs");
const helpers_1 = require("../../../helpers");
let PostRelationsResolver = class PostRelationsResolver {
    async author(post, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).author({});
    }
    async location(post, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).location({});
    }
    async hotel(post, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).hotel({});
    }
    async comments(post, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).comments(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Post_1.Post, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "author", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Location_1.Location, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Post_1.Post, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "location", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Hotel_1.Hotel, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Post_1.Post, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "hotel", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Comment_1.Comment], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Post_1.Post, Object, PostCommentsArgs_1.PostCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "comments", null);
PostRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], PostRelationsResolver);
exports.PostRelationsResolver = PostRelationsResolver;
