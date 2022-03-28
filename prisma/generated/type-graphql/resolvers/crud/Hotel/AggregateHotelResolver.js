"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateHotelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateHotelArgs_1 = require("./args/AggregateHotelArgs");
const Hotel_1 = require("../../../models/Hotel");
const AggregateHotel_1 = require("../../outputs/AggregateHotel");
const helpers_1 = require("../../../helpers");
let AggregateHotelResolver = class AggregateHotelResolver {
    async aggregateHotel(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateHotel_1.AggregateHotel, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateHotelArgs_1.AggregateHotelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateHotelResolver.prototype, "aggregateHotel", null);
AggregateHotelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Hotel_1.Hotel)
], AggregateHotelResolver);
exports.AggregateHotelResolver = AggregateHotelResolver;
