"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProfileScalarFieldEnum;
(function (ProfileScalarFieldEnum) {
    ProfileScalarFieldEnum["id"] = "id";
    ProfileScalarFieldEnum["phone"] = "phone";
    ProfileScalarFieldEnum["address"] = "address";
    ProfileScalarFieldEnum["image"] = "image";
    ProfileScalarFieldEnum["gender"] = "gender";
    ProfileScalarFieldEnum["countryId"] = "countryId";
    ProfileScalarFieldEnum["userId"] = "userId";
    ProfileScalarFieldEnum["created_at"] = "created_at";
    ProfileScalarFieldEnum["updated_at"] = "updated_at";
})(ProfileScalarFieldEnum = exports.ProfileScalarFieldEnum || (exports.ProfileScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProfileScalarFieldEnum, {
    name: "ProfileScalarFieldEnum",
    description: undefined,
});
