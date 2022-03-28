"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithoutHotelInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyHotelInputEnvelope_1 = require("../inputs/PostCreateManyHotelInputEnvelope");
const PostCreateOrConnectWithoutHotelInput_1 = require("../inputs/PostCreateOrConnectWithoutHotelInput");
const PostCreateWithoutHotelInput_1 = require("../inputs/PostCreateWithoutHotelInput");
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyWithWhereWithoutHotelInput_1 = require("../inputs/PostUpdateManyWithWhereWithoutHotelInput");
const PostUpdateWithWhereUniqueWithoutHotelInput_1 = require("../inputs/PostUpdateWithWhereUniqueWithoutHotelInput");
const PostUpsertWithWhereUniqueWithoutHotelInput_1 = require("../inputs/PostUpsertWithWhereUniqueWithoutHotelInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateManyWithoutHotelInput = class PostUpdateManyWithoutHotelInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutHotelInput_1.PostCreateWithoutHotelInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutHotelInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutHotelInput_1.PostCreateOrConnectWithoutHotelInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutHotelInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutHotelInput_1.PostUpsertWithWhereUniqueWithoutHotelInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutHotelInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateManyHotelInputEnvelope_1.PostCreateManyHotelInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateManyHotelInputEnvelope_1.PostCreateManyHotelInputEnvelope)
], PostUpdateManyWithoutHotelInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutHotelInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutHotelInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutHotelInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutHotelInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutHotelInput_1.PostUpdateWithWhereUniqueWithoutHotelInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutHotelInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutHotelInput_1.PostUpdateManyWithWhereWithoutHotelInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutHotelInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostScalarWhereInput_1.PostScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutHotelInput.prototype, "deleteMany", void 0);
PostUpdateManyWithoutHotelInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateManyWithoutHotelInput", {
        isAbstract: true
    })
], PostUpdateManyWithoutHotelInput);
exports.PostUpdateManyWithoutHotelInput = PostUpdateManyWithoutHotelInput;
