"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCountryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateCountryArgs_1 = require("./args/CreateCountryArgs");
const Country_1 = require("../../../models/Country");
const helpers_1 = require("../../../helpers");
let CreateCountryResolver = class CreateCountryResolver {
    async createCountry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).country.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Country_1.Country, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCountryArgs_1.CreateCountryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateCountryResolver.prototype, "createCountry", null);
CreateCountryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Country_1.Country)
], CreateCountryResolver);
exports.CreateCountryResolver = CreateCountryResolver;
