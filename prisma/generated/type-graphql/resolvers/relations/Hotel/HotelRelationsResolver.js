"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Hotel_1 = require("../../../models/Hotel");
const Post_1 = require("../../../models/Post");
const HotelPostsArgs_1 = require("./args/HotelPostsArgs");
const helpers_1 = require("../../../helpers");
let HotelRelationsResolver = class HotelRelationsResolver {
    async posts(hotel, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.findUnique({
            where: {
                id: hotel.id,
            },
        }).posts(args);
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
    tslib_1.__metadata("design:paramtypes", [Hotel_1.Hotel, Object, HotelPostsArgs_1.HotelPostsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HotelRelationsResolver.prototype, "posts", null);
HotelRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Hotel_1.Hotel)
], HotelRelationsResolver);
exports.HotelRelationsResolver = HotelRelationsResolver;
