"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLocationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyLocationArgs_1 = require("./args/CreateManyLocationArgs");
const Location_1 = require("../../../models/Location");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyLocationResolver = class CreateManyLocationResolver {
    async createManyLocation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).location.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyLocationArgs_1.CreateManyLocationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyLocationResolver.prototype, "createManyLocation", null);
CreateManyLocationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Location_1.Location)
], CreateManyLocationResolver);
exports.CreateManyLocationResolver = CreateManyLocationResolver;
