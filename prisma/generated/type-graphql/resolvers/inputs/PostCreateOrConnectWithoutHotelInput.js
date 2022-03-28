"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutHotelInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutHotelInput_1 = require("../inputs/PostCreateWithoutHotelInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutHotelInput = class PostCreateOrConnectWithoutHotelInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutHotelInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutHotelInput_1.PostCreateWithoutHotelInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutHotelInput_1.PostCreateWithoutHotelInput)
], PostCreateOrConnectWithoutHotelInput.prototype, "create", void 0);
PostCreateOrConnectWithoutHotelInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutHotelInput", {
        isAbstract: true
    })
], PostCreateOrConnectWithoutHotelInput);
exports.PostCreateOrConnectWithoutHotelInput = PostCreateOrConnectWithoutHotelInput;
