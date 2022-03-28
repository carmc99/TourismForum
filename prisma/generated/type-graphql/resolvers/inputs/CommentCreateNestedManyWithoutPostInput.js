"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateNestedManyWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyPostInputEnvelope_1 = require("../inputs/CommentCreateManyPostInputEnvelope");
const CommentCreateOrConnectWithoutPostInput_1 = require("../inputs/CommentCreateOrConnectWithoutPostInput");
const CommentCreateWithoutPostInput_1 = require("../inputs/CommentCreateWithoutPostInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateNestedManyWithoutPostInput = class CommentCreateNestedManyWithoutPostInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateWithoutPostInput_1.CommentCreateWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutPostInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutPostInput_1.CommentCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutPostInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateManyPostInputEnvelope_1.CommentCreateManyPostInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateManyPostInputEnvelope_1.CommentCreateManyPostInputEnvelope)
], CommentCreateNestedManyWithoutPostInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutPostInput.prototype, "connect", void 0);
CommentCreateNestedManyWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateNestedManyWithoutPostInput", {
        isAbstract: true
    })
], CommentCreateNestedManyWithoutPostInput);
exports.CommentCreateNestedManyWithoutPostInput = CommentCreateNestedManyWithoutPostInput;
