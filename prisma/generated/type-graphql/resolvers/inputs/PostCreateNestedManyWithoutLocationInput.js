"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedManyWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyLocationInputEnvelope_1 = require("../inputs/PostCreateManyLocationInputEnvelope");
const PostCreateOrConnectWithoutLocationInput_1 = require("../inputs/PostCreateOrConnectWithoutLocationInput");
const PostCreateWithoutLocationInput_1 = require("../inputs/PostCreateWithoutLocationInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedManyWithoutLocationInput = class PostCreateNestedManyWithoutLocationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutLocationInput_1.PostCreateWithoutLocationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutLocationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutLocationInput_1.PostCreateOrConnectWithoutLocationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutLocationInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateManyLocationInputEnvelope_1.PostCreateManyLocationInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateManyLocationInputEnvelope_1.PostCreateManyLocationInputEnvelope)
], PostCreateNestedManyWithoutLocationInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutLocationInput.prototype, "connect", void 0);
PostCreateNestedManyWithoutLocationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateNestedManyWithoutLocationInput", {
        isAbstract: true
    })
], PostCreateNestedManyWithoutLocationInput);
exports.PostCreateNestedManyWithoutLocationInput = PostCreateNestedManyWithoutLocationInput;
