"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyHotelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyHotelArgs_1 = require("./args/DeleteManyHotelArgs");
const Hotel_1 = require("../../../models/Hotel");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyHotelResolver = class DeleteManyHotelResolver {
    async deleteManyHotel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyHotelArgs_1.DeleteManyHotelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyHotelResolver.prototype, "deleteManyHotel", null);
DeleteManyHotelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Hotel_1.Hotel)
], DeleteManyHotelResolver);
exports.DeleteManyHotelResolver = DeleteManyHotelResolver;
