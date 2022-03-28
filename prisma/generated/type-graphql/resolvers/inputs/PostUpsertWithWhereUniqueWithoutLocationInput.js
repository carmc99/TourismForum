"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithWhereUniqueWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutLocationInput_1 = require("../inputs/PostCreateWithoutLocationInput");
const PostUpdateWithoutLocationInput_1 = require("../inputs/PostUpdateWithoutLocationInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpsertWithWhereUniqueWithoutLocationInput = class PostUpsertWithWhereUniqueWithoutLocationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpsertWithWhereUniqueWithoutLocationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutLocationInput_1.PostUpdateWithoutLocationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutLocationInput_1.PostUpdateWithoutLocationInput)
], PostUpsertWithWhereUniqueWithoutLocationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutLocationInput_1.PostCreateWithoutLocationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutLocationInput_1.PostCreateWithoutLocationInput)
], PostUpsertWithWhereUniqueWithoutLocationInput.prototype, "create", void 0);
PostUpsertWithWhereUniqueWithoutLocationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutLocationInput", {
        isAbstract: true
    })
], PostUpsertWithWhereUniqueWithoutLocationInput);
exports.PostUpsertWithWhereUniqueWithoutLocationInput = PostUpsertWithWhereUniqueWithoutLocationInput;
