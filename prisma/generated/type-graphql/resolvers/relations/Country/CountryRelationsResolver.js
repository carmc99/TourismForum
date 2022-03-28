"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Country_1 = require("../../../models/Country");
const Location_1 = require("../../../models/Location");
const Profile_1 = require("../../../models/Profile");
const CountryLocationsArgs_1 = require("./args/CountryLocationsArgs");
const CountryProfilesArgs_1 = require("./args/CountryProfilesArgs");
const helpers_1 = require("../../../helpers");
let CountryRelationsResolver = class CountryRelationsResolver {
    async profiles(country, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).country.findUnique({
            where: {
                id: country.id,
            },
        }).profiles(args);
    }
    async locations(country, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).country.findUnique({
            where: {
                id: country.id,
            },
        }).locations(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Profile_1.Profile], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Country_1.Country, Object, CountryProfilesArgs_1.CountryProfilesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountryRelationsResolver.prototype, "profiles", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Location_1.Location], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Country_1.Country, Object, CountryLocationsArgs_1.CountryLocationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CountryRelationsResolver.prototype, "locations", null);
CountryRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Country_1.Country)
], CountryRelationsResolver);
exports.CountryRelationsResolver = CountryRelationsResolver;
