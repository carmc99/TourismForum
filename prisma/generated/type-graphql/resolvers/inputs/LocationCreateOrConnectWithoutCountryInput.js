"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateOrConnectWithoutCountryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateWithoutCountryInput_1 = require("../inputs/LocationCreateWithoutCountryInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationCreateOrConnectWithoutCountryInput = class LocationCreateOrConnectWithoutCountryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationCreateOrConnectWithoutCountryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateWithoutCountryInput_1.LocationCreateWithoutCountryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationCreateWithoutCountryInput_1.LocationCreateWithoutCountryInput)
], LocationCreateOrConnectWithoutCountryInput.prototype, "create", void 0);
LocationCreateOrConnectWithoutCountryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateOrConnectWithoutCountryInput", {
        isAbstract: true
    })
], LocationCreateOrConnectWithoutCountryInput);
exports.LocationCreateOrConnectWithoutCountryInput = LocationCreateOrConnectWithoutCountryInput;
