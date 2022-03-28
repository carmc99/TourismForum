"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateOneRequiredWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateOrConnectWithoutCommentsInput_1 = require("../inputs/PostCreateOrConnectWithoutCommentsInput");
const PostCreateWithoutCommentsInput_1 = require("../inputs/PostCreateWithoutCommentsInput");
const PostUpdateWithoutCommentsInput_1 = require("../inputs/PostUpdateWithoutCommentsInput");
const PostUpsertWithoutCommentsInput_1 = require("../inputs/PostUpsertWithoutCommentsInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateOneRequiredWithoutCommentsInput = class PostUpdateOneRequiredWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutCommentsInput_1.PostCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutCommentsInput_1.PostCreateWithoutCommentsInput)
], PostUpdateOneRequiredWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutCommentsInput_1.PostCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateOrConnectWithoutCommentsInput_1.PostCreateOrConnectWithoutCommentsInput)
], PostUpdateOneRequiredWithoutCommentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpsertWithoutCommentsInput_1.PostUpsertWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpsertWithoutCommentsInput_1.PostUpsertWithoutCommentsInput)
], PostUpdateOneRequiredWithoutCommentsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateOneRequiredWithoutCommentsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutCommentsInput_1.PostUpdateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutCommentsInput_1.PostUpdateWithoutCommentsInput)
], PostUpdateOneRequiredWithoutCommentsInput.prototype, "update", void 0);
PostUpdateOneRequiredWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateOneRequiredWithoutCommentsInput", {
        isAbstract: true
    })
], PostUpdateOneRequiredWithoutCommentsInput);
exports.PostUpdateOneRequiredWithoutCommentsInput = PostUpdateOneRequiredWithoutCommentsInput;
