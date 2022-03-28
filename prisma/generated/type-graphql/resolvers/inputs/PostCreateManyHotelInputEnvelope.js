"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyHotelInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyHotelInput_1 = require("../inputs/PostCreateManyHotelInput");
let PostCreateManyHotelInputEnvelope = class PostCreateManyHotelInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateManyHotelInput_1.PostCreateManyHotelInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateManyHotelInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateManyHotelInputEnvelope.prototype, "skipDuplicates", void 0);
PostCreateManyHotelInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateManyHotelInputEnvelope", {
        isAbstract: true
    })
], PostCreateManyHotelInputEnvelope);
exports.PostCreateManyHotelInputEnvelope = PostCreateManyHotelInputEnvelope;
