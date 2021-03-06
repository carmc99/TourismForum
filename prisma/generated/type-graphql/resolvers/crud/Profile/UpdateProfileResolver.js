"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateProfileArgs_1 = require("./args/UpdateProfileArgs");
const Profile_1 = require("../../../models/Profile");
const helpers_1 = require("../../../helpers");
let UpdateProfileResolver = class UpdateProfileResolver {
    async updateProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).profile.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Profile_1.Profile, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateProfileArgs_1.UpdateProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateProfileResolver.prototype, "updateProfile", null);
UpdateProfileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Profile_1.Profile)
], UpdateProfileResolver);
exports.UpdateProfileResolver = UpdateProfileResolver;
