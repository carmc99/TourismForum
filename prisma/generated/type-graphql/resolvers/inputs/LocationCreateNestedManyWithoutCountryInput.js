"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateNestedManyWithoutCountryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateManyCountryInputEnvelope_1 = require("../inputs/LocationCreateManyCountryInputEnvelope");
const LocationCreateOrConnectWithoutCountryInput_1 = require("../inputs/LocationCreateOrConnectWithoutCountryInput");
const LocationCreateWithoutCountryInput_1 = require("../inputs/LocationCreateWithoutCountryInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationCreateNestedManyWithoutCountryInput = class LocationCreateNestedManyWithoutCountryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationCreateWithoutCountryInput_1.LocationCreateWithoutCountryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationCreateNestedManyWithoutCountryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationCreateOrConnectWithoutCountryInput_1.LocationCreateOrConnectWithoutCountryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationCreateNestedManyWithoutCountryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateManyCountryInputEnvelope_1.LocationCreateManyCountryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateManyCountryInputEnvelope_1.LocationCreateManyCountryInputEnvelope)
], LocationCreateNestedManyWithoutCountryInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereUniqueInput_1.LocationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationCreateNestedManyWithoutCountryInput.prototype, "connect", void 0);
LocationCreateNestedManyWithoutCountryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateNestedManyWithoutCountryInput", {
        isAbstract: true
    })
], LocationCreateNestedManyWithoutCountryInput);
exports.LocationCreateNestedManyWithoutCountryInput = LocationCreateNestedManyWithoutCountryInput;
