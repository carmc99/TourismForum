"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithWhereUniqueWithoutHotelInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostUpdateWithoutHotelInput_1 = require("../inputs/PostUpdateWithoutHotelInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateWithWhereUniqueWithoutHotelInput = class PostUpdateWithWhereUniqueWithoutHotelInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateWithWhereUniqueWithoutHotelInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutHotelInput_1.PostUpdateWithoutHotelInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutHotelInput_1.PostUpdateWithoutHotelInput)
], PostUpdateWithWhereUniqueWithoutHotelInput.prototype, "data", void 0);
PostUpdateWithWhereUniqueWithoutHotelInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutHotelInput", {
        isAbstract: true
    })
], PostUpdateWithWhereUniqueWithoutHotelInput);
exports.PostUpdateWithWhereUniqueWithoutHotelInput = PostUpdateWithWhereUniqueWithoutHotelInput;
