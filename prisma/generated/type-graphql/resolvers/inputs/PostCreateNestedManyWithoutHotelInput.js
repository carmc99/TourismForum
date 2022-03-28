"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedManyWithoutHotelInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyHotelInputEnvelope_1 = require("../inputs/PostCreateManyHotelInputEnvelope");
const PostCreateOrConnectWithoutHotelInput_1 = require("../inputs/PostCreateOrConnectWithoutHotelInput");
const PostCreateWithoutHotelInput_1 = require("../inputs/PostCreateWithoutHotelInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedManyWithoutHotelInput = class PostCreateNestedManyWithoutHotelInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutHotelInput_1.PostCreateWithoutHotelInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutHotelInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutHotelInput_1.PostCreateOrConnectWithoutHotelInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutHotelInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateManyHotelInputEnvelope_1.PostCreateManyHotelInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateManyHotelInputEnvelope_1.PostCreateManyHotelInputEnvelope)
], PostCreateNestedManyWithoutHotelInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutHotelInput.prototype, "connect", void 0);
PostCreateNestedManyWithoutHotelInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateNestedManyWithoutHotelInput", {
        isAbstract: true
    })
], PostCreateNestedManyWithoutHotelInput);
exports.PostCreateNestedManyWithoutHotelInput = PostCreateNestedManyWithoutHotelInput;
