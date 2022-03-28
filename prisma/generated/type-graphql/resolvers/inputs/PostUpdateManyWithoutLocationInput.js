"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyLocationInputEnvelope_1 = require("../inputs/PostCreateManyLocationInputEnvelope");
const PostCreateOrConnectWithoutLocationInput_1 = require("../inputs/PostCreateOrConnectWithoutLocationInput");
const PostCreateWithoutLocationInput_1 = require("../inputs/PostCreateWithoutLocationInput");
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyWithWhereWithoutLocationInput_1 = require("../inputs/PostUpdateManyWithWhereWithoutLocationInput");
const PostUpdateWithWhereUniqueWithoutLocationInput_1 = require("../inputs/PostUpdateWithWhereUniqueWithoutLocationInput");
const PostUpsertWithWhereUniqueWithoutLocationInput_1 = require("../inputs/PostUpsertWithWhereUniqueWithoutLocationInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateManyWithoutLocationInput = class PostUpdateManyWithoutLocationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutLocationInput_1.PostCreateWithoutLocationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutLocationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutLocationInput_1.PostCreateOrConnectWithoutLocationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutLocationInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutLocationInput_1.PostUpsertWithWhereUniqueWithoutLocationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutLocationInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateManyLocationInputEnvelope_1.PostCreateManyLocationInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateManyLocationInputEnvelope_1.PostCreateManyLocationInputEnvelope)
], PostUpdateManyWithoutLocationInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutLocationInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutLocationInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutLocationInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutLocationInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutLocationInput_1.PostUpdateWithWhereUniqueWithoutLocationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutLocationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutLocationInput_1.PostUpdateManyWithWhereWithoutLocationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutLocationInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostScalarWhereInput_1.PostScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutLocationInput.prototype, "deleteMany", void 0);
PostUpdateManyWithoutLocationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateManyWithoutLocationInput", {
        isAbstract: true
    })
], PostUpdateManyWithoutLocationInput);
exports.PostUpdateManyWithoutLocationInput = PostUpdateManyWithoutLocationInput;
