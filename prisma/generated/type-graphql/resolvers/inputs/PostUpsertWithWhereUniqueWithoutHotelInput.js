"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithWhereUniqueWithoutHotelInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutHotelInput_1 = require("../inputs/PostCreateWithoutHotelInput");
const PostUpdateWithoutHotelInput_1 = require("../inputs/PostUpdateWithoutHotelInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpsertWithWhereUniqueWithoutHotelInput = class PostUpsertWithWhereUniqueWithoutHotelInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpsertWithWhereUniqueWithoutHotelInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutHotelInput_1.PostUpdateWithoutHotelInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutHotelInput_1.PostUpdateWithoutHotelInput)
], PostUpsertWithWhereUniqueWithoutHotelInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutHotelInput_1.PostCreateWithoutHotelInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutHotelInput_1.PostCreateWithoutHotelInput)
], PostUpsertWithWhereUniqueWithoutHotelInput.prototype, "create", void 0);
PostUpsertWithWhereUniqueWithoutHotelInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutHotelInput", {
        isAbstract: true
    })
], PostUpsertWithWhereUniqueWithoutHotelInput);
exports.PostUpsertWithWhereUniqueWithoutHotelInput = PostUpsertWithWhereUniqueWithoutHotelInput;
