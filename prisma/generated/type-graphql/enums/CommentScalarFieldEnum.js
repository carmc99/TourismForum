"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CommentScalarFieldEnum;
(function (CommentScalarFieldEnum) {
    CommentScalarFieldEnum["id"] = "id";
    CommentScalarFieldEnum["userId"] = "userId";
    CommentScalarFieldEnum["postId"] = "postId";
    CommentScalarFieldEnum["description"] = "description";
    CommentScalarFieldEnum["score"] = "score";
    CommentScalarFieldEnum["created_at"] = "created_at";
    CommentScalarFieldEnum["updated_at"] = "updated_at";
})(CommentScalarFieldEnum = exports.CommentScalarFieldEnum || (exports.CommentScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
    name: "CommentScalarFieldEnum",
    description: undefined,
});
