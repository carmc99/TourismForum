"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateManyWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyPostInputEnvelope_1 = require("../inputs/CommentCreateManyPostInputEnvelope");
const CommentCreateOrConnectWithoutPostInput_1 = require("../inputs/CommentCreateOrConnectWithoutPostInput");
const CommentCreateWithoutPostInput_1 = require("../inputs/CommentCreateWithoutPostInput");
const CommentScalarWhereInput_1 = require("../inputs/CommentScalarWhereInput");
const CommentUpdateManyWithWhereWithoutPostInput_1 = require("../inputs/CommentUpdateManyWithWhereWithoutPostInput");
const CommentUpdateWithWhereUniqueWithoutPostInput_1 = require("../inputs/CommentUpdateWithWhereUniqueWithoutPostInput");
const CommentUpsertWithWhereUniqueWithoutPostInput_1 = require("../inputs/CommentUpsertWithWhereUniqueWithoutPostInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateManyWithoutPostInput = class CommentUpdateManyWithoutPostInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateWithoutPostInput_1.CommentCreateWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutPostInput_1.CommentCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutPostInput_1.CommentUpsertWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateManyPostInputEnvelope_1.CommentCreateManyPostInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateManyPostInputEnvelope_1.CommentCreateManyPostInputEnvelope)
], CommentUpdateManyWithoutPostInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutPostInput_1.CommentUpdateWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutPostInput_1.CommentUpdateManyWithWhereWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarWhereInput_1.CommentScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutPostInput.prototype, "deleteMany", void 0);
CommentUpdateManyWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateManyWithoutPostInput", {
        isAbstract: true
    })
], CommentUpdateManyWithoutPostInput);
exports.CommentUpdateManyWithoutPostInput = CommentUpdateManyWithoutPostInput;
