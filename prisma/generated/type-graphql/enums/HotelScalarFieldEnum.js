"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var HotelScalarFieldEnum;
(function (HotelScalarFieldEnum) {
    HotelScalarFieldEnum["id"] = "id";
    HotelScalarFieldEnum["name"] = "name";
    HotelScalarFieldEnum["price_per_night"] = "price_per_night";
    HotelScalarFieldEnum["lunch_included"] = "lunch_included";
    HotelScalarFieldEnum["image"] = "image";
    HotelScalarFieldEnum["created_at"] = "created_at";
    HotelScalarFieldEnum["updated_at"] = "updated_at";
})(HotelScalarFieldEnum = exports.HotelScalarFieldEnum || (exports.HotelScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(HotelScalarFieldEnum, {
    name: "HotelScalarFieldEnum",
    description: undefined,
});
