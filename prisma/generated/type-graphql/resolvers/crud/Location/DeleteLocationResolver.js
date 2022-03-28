"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLocationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteLocationArgs_1 = require("./args/DeleteLocationArgs");
const Location_1 = require("../../../models/Location");
const helpers_1 = require("../../../helpers");
let DeleteLocationResolver = class DeleteLocationResolver {
    async deleteLocation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Location_1.Location, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteLocationArgs_1.DeleteLocationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteLocationResolver.prototype, "deleteLocation", null);
DeleteLocationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Location_1.Location)
], DeleteLocationResolver);
exports.DeleteLocationResolver = DeleteLocationResolver;
