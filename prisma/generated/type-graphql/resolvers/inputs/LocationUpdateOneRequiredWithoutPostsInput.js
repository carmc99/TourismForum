"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateOneRequiredWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateOrConnectWithoutPostsInput_1 = require("../inputs/LocationCreateOrConnectWithoutPostsInput");
const LocationCreateWithoutPostsInput_1 = require("../inputs/LocationCreateWithoutPostsInput");
const LocationUpdateWithoutPostsInput_1 = require("../inputs/LocationUpdateWithoutPostsInput");
const LocationUpsertWithoutPostsInput_1 = require("../inputs/LocationUpsertWithoutPostsInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationUpdateOneRequiredWithoutPostsInput = class LocationUpdateOneRequiredWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateWithoutPostsInput_1.LocationCreateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateWithoutPostsInput_1.LocationCreateWithoutPostsInput)
], LocationUpdateOneRequiredWithoutPostsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutPostsInput_1.LocationCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateOrConnectWithoutPostsInput_1.LocationCreateOrConnectWithoutPostsInput)
], LocationUpdateOneRequiredWithoutPostsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpsertWithoutPostsInput_1.LocationUpsertWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationUpsertWithoutPostsInput_1.LocationUpsertWithoutPostsInput)
], LocationUpdateOneRequiredWithoutPostsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationUpdateOneRequiredWithoutPostsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateWithoutPostsInput_1.LocationUpdateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationUpdateWithoutPostsInput_1.LocationUpdateWithoutPostsInput)
], LocationUpdateOneRequiredWithoutPostsInput.prototype, "update", void 0);
LocationUpdateOneRequiredWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpdateOneRequiredWithoutPostsInput", {
        isAbstract: true
    })
], LocationUpdateOneRequiredWithoutPostsInput);
exports.LocationUpdateOneRequiredWithoutPostsInput = LocationUpdateOneRequiredWithoutPostsInput;
