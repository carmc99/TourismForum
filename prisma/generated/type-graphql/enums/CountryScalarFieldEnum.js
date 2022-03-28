"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CountryScalarFieldEnum;
(function (CountryScalarFieldEnum) {
    CountryScalarFieldEnum["id"] = "id";
    CountryScalarFieldEnum["name"] = "name";
    CountryScalarFieldEnum["created_at"] = "created_at";
    CountryScalarFieldEnum["updated_at"] = "updated_at";
})(CountryScalarFieldEnum = exports.CountryScalarFieldEnum || (exports.CountryScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CountryScalarFieldEnum, {
    name: "CountryScalarFieldEnum",
    description: undefined,
});
