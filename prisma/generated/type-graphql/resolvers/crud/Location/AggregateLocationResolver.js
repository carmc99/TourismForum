"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLocationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateLocationArgs_1 = require("./args/AggregateLocationArgs");
const Location_1 = require("../../../models/Location");
const AggregateLocation_1 = require("../../outputs/AggregateLocation");
const helpers_1 = require("../../../helpers");
let AggregateLocationResolver = class AggregateLocationResolver {
    async aggregateLocation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).location.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateLocation_1.AggregateLocation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateLocationArgs_1.AggregateLocationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateLocationResolver.prototype, "aggregateLocation", null);
AggregateLocationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Location_1.Location)
], AggregateLocationResolver);
exports.AggregateLocationResolver = AggregateLocationResolver;
