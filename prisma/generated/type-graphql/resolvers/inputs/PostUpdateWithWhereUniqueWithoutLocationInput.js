"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithWhereUniqueWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostUpdateWithoutLocationInput_1 = require("../inputs/PostUpdateWithoutLocationInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateWithWhereUniqueWithoutLocationInput = class PostUpdateWithWhereUniqueWithoutLocationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateWithWhereUniqueWithoutLocationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutLocationInput_1.PostUpdateWithoutLocationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutLocationInput_1.PostUpdateWithoutLocationInput)
], PostUpdateWithWhereUniqueWithoutLocationInput.prototype, "data", void 0);
PostUpdateWithWhereUniqueWithoutLocationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutLocationInput", {
        isAbstract: true
    })
], PostUpdateWithWhereUniqueWithoutLocationInput);
exports.PostUpdateWithWhereUniqueWithoutLocationInput = PostUpdateWithWhereUniqueWithoutLocationInput;
