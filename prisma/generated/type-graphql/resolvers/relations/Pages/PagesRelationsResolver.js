"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pages_1 = require("../../../models/Pages");
const Role_1 = require("../../../models/Role");
const PagesRolesArgs_1 = require("./args/PagesRolesArgs");
const helpers_1 = require("../../../helpers");
let PagesRelationsResolver = class PagesRelationsResolver {
    async roles(pages, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).pages.findUnique({
            where: {
                id: pages.id,
            },
        }).roles(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Role_1.Role], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Pages_1.Pages, Object, PagesRolesArgs_1.PagesRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PagesRelationsResolver.prototype, "roles", null);
PagesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pages_1.Pages)
], PagesRelationsResolver);
exports.PagesRelationsResolver = PagesRelationsResolver;
