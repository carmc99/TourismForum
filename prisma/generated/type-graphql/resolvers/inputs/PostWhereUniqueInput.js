"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostWhereUniqueInput = class PostWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostWhereUniqueInput.prototype, "id", void 0);
PostWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostWhereUniqueInput", {
        isAbstract: true
    })
], PostWhereUniqueInput);
exports.PostWhereUniqueInput = PostWhereUniqueInput;
