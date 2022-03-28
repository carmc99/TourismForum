"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelPostsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostOrderByWithRelationInput_1 = require("../../../inputs/PostOrderByWithRelationInput");
const PostWhereInput_1 = require("../../../inputs/PostWhereInput");
const PostWhereUniqueInput_1 = require("../../../inputs/PostWhereUniqueInput");
const PostScalarFieldEnum_1 = require("../../../../enums/PostScalarFieldEnum");
let HotelPostsArgs = class HotelPostsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], HotelPostsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostOrderByWithRelationInput_1.PostOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HotelPostsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], HotelPostsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], HotelPostsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], HotelPostsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostScalarFieldEnum_1.PostScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], HotelPostsArgs.prototype, "distinct", void 0);
HotelPostsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], HotelPostsArgs);
exports.HotelPostsArgs = HotelPostsArgs;
