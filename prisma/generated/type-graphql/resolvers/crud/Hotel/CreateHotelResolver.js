"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHotelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateHotelArgs_1 = require("./args/CreateHotelArgs");
const Hotel_1 = require("../../../models/Hotel");
const helpers_1 = require("../../../helpers");
let CreateHotelResolver = class CreateHotelResolver {
    async createHotel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).hotel.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateHotelArgs_1.CreateHotelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateHotelResolver.prototype, "createHotel", null);
CreateHotelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Hotel_1.Hotel)
], CreateHotelResolver);
exports.CreateHotelResolver = CreateHotelResolver;
