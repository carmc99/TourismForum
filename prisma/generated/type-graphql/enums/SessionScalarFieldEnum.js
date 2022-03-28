"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SessionScalarFieldEnum;
(function (SessionScalarFieldEnum) {
    SessionScalarFieldEnum["id"] = "id";
    SessionScalarFieldEnum["expires"] = "expires";
    SessionScalarFieldEnum["sessionToken"] = "sessionToken";
    SessionScalarFieldEnum["userId"] = "userId";
})(SessionScalarFieldEnum = exports.SessionScalarFieldEnum || (exports.SessionScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SessionScalarFieldEnum, {
    name: "SessionScalarFieldEnum",
    description: undefined,
});
