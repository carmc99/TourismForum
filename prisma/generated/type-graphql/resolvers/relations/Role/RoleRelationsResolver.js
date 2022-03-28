"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pages_1 = require("../../../models/Pages");
const Role_1 = require("../../../models/Role");
const User_1 = require("../../../models/User");
const RolePagesArgs_1 = require("./args/RolePagesArgs");
const RoleUsersArgs_1 = require("./args/RoleUsersArgs");
const helpers_1 = require("../../../helpers");
let RoleRelationsResolver = class RoleRelationsResolver {
    async users(role, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).role.findUnique({
            where: {
                id: role.id,
            },
        }).users(args);
    }
    async pages(role, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).role.findUnique({
            where: {
                id: role.id,
            },
        }).pages(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [User_1.User], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Role_1.Role, Object, RoleUsersArgs_1.RoleUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleRelationsResolver.prototype, "users", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Pages_1.Pages], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Role_1.Role, Object, RolePagesArgs_1.RolePagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleRelationsResolver.prototype, "pages", null);
RoleRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Role_1.Role)
], RoleRelationsResolver);
exports.RoleRelationsResolver = RoleRelationsResolver;
