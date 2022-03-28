"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyLocationInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyLocationInput_1 = require("../inputs/PostCreateManyLocationInput");
let PostCreateManyLocationInputEnvelope = class PostCreateManyLocationInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateManyLocationInput_1.PostCreateManyLocationInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateManyLocationInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateManyLocationInputEnvelope.prototype, "skipDuplicates", void 0);
PostCreateManyLocationInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateManyLocationInputEnvelope", {
        isAbstract: true
    })
], PostCreateManyLocationInputEnvelope);
exports.PostCreateManyLocationInputEnvelope = PostCreateManyLocationInputEnvelope;
