"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Country_1 = require("../../../models/Country");
const Location_1 = require("../../../models/Location");
const Post_1 = require("../../../models/Post");
const LocationPostsArgs_1 = require("./args/LocationPostsArgs");
const helpers_1 = require("../../../helpers");
let LocationRelationsResolver = class LocationRelationsResolver {
    async posts(location, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).location.findUnique({
            where: {
                id: location.id,
            },
        }).posts(args);
    }
    async country(location, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).location.findUnique({
            where: {
                id: location.id,
            },
        }).country({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Post_1.Post], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Location_1.Location, Object, LocationPostsArgs_1.LocationPostsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LocationRelationsResolver.prototype, "posts", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Country_1.Country, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Location_1.Location, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LocationRelationsResolver.prototype, "country", null);
LocationRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Location_1.Location)
], LocationRelationsResolver);
exports.LocationRelationsResolver = LocationRelationsResolver;
