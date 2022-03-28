"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PagesScalarFieldEnum;
(function (PagesScalarFieldEnum) {
    PagesScalarFieldEnum["id"] = "id";
    PagesScalarFieldEnum["name"] = "name";
    PagesScalarFieldEnum["path"] = "path";
    PagesScalarFieldEnum["created_at"] = "created_at";
    PagesScalarFieldEnum["updated_at"] = "updated_at";
})(PagesScalarFieldEnum = exports.PagesScalarFieldEnum || (exports.PagesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PagesScalarFieldEnum, {
    name: "PagesScalarFieldEnum",
    description: undefined,
});
