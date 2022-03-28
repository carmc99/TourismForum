"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var LocationScalarFieldEnum;
(function (LocationScalarFieldEnum) {
    LocationScalarFieldEnum["id"] = "id";
    LocationScalarFieldEnum["name"] = "name";
    LocationScalarFieldEnum["countryId"] = "countryId";
    LocationScalarFieldEnum["created_at"] = "created_at";
    LocationScalarFieldEnum["updated_at"] = "updated_at";
})(LocationScalarFieldEnum = exports.LocationScalarFieldEnum || (exports.LocationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(LocationScalarFieldEnum, {
    name: "LocationScalarFieldEnum",
    description: undefined,
});
