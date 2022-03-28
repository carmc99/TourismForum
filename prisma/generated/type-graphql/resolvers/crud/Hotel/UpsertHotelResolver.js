"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertHotelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertHotelArgs_1 = require("./args/UpsertHotelArgs");
const Hotel_1 = require("../../../models/Hotel");
const helpers_1 = require("../../../helpers");
let UpsertHotelResolver = class UpsertHotelResolver {
    async upsertHotel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertHotelResolver.prototype, "upsertHotel", null);
UpsertHotelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Hotel_1.Hotel)
], UpsertHotelResolver);
exports.UpsertHotelResolver = UpsertHotelResolver;
