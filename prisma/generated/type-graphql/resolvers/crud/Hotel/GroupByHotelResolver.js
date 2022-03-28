"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByHotelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByHotelArgs_1 = require("./args/GroupByHotelArgs");
const Hotel_1 = require("../../../models/Hotel");
const HotelGroupBy_1 = require("../../outputs/HotelGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByHotelResolver = class GroupByHotelResolver {
    async groupByHotel(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByHotelResolver.prototype, "groupByHotel", null);
GroupByHotelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Hotel_1.Hotel)
], GroupByHotelResolver);
exports.GroupByHotelResolver = GroupByHotelResolver;
