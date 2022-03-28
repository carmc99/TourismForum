"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueHotelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueHotelArgs_1 = require("./args/FindUniqueHotelArgs");
const Hotel_1 = require("../../../models/Hotel");
const helpers_1 = require("../../../helpers");
let FindUniqueHotelResolver = class FindUniqueHotelResolver {
    async hotel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], FindUniqueHotelResolver.prototype, "hotel", null);
FindUniqueHotelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Hotel_1.Hotel)
], FindUniqueHotelResolver);
exports.FindUniqueHotelResolver = FindUniqueHotelResolver;
