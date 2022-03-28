"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PostScalarFieldEnum;
(function (PostScalarFieldEnum) {
    PostScalarFieldEnum["id"] = "id";
    PostScalarFieldEnum["userId"] = "userId";
    PostScalarFieldEnum["locationId"] = "locationId";
    PostScalarFieldEnum["biome"] = "biome";
    PostScalarFieldEnum["hotelId"] = "hotelId";
    PostScalarFieldEnum["title"] = "title";
    PostScalarFieldEnum["description"] = "description";
    PostScalarFieldEnum["image"] = "image";
    PostScalarFieldEnum["average_score"] = "average_score";
    PostScalarFieldEnum["created_at"] = "created_at";
    PostScalarFieldEnum["updated_at"] = "updated_at";
})(PostScalarFieldEnum = exports.PostScalarFieldEnum || (exports.PostScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
    name: "PostScalarFieldEnum",
    description: undefined,
});
