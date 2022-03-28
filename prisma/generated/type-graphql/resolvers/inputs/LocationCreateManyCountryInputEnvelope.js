"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateManyCountryInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateManyCountryInput_1 = require("../inputs/LocationCreateManyCountryInput");
let LocationCreateManyCountryInputEnvelope = class LocationCreateManyCountryInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationCreateManyCountryInput_1.LocationCreateManyCountryInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], LocationCreateManyCountryInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], LocationCreateManyCountryInputEnvelope.prototype, "skipDuplicates", void 0);
LocationCreateManyCountryInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateManyCountryInputEnvelope", {
        isAbstract: true
    })
], LocationCreateManyCountryInputEnvelope);
exports.LocationCreateManyCountryInputEnvelope = LocationCreateManyCountryInputEnvelope;
