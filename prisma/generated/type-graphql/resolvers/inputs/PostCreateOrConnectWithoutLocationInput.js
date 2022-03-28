"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutLocationInput_1 = require("../inputs/PostCreateWithoutLocationInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutLocationInput = class PostCreateOrConnectWithoutLocationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutLocationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutLocationInput_1.PostCreateWithoutLocationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutLocationInput_1.PostCreateWithoutLocationInput)
], PostCreateOrConnectWithoutLocationInput.prototype, "create", void 0);
PostCreateOrConnectWithoutLocationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutLocationInput", {
        isAbstract: true
    })
], PostCreateOrConnectWithoutLocationInput);
exports.PostCreateOrConnectWithoutLocationInput = PostCreateOrConnectWithoutLocationInput;
