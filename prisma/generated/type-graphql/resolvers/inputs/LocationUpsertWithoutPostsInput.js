"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpsertWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateWithoutPostsInput_1 = require("../inputs/LocationCreateWithoutPostsInput");
const LocationUpdateWithoutPostsInput_1 = require("../inputs/LocationUpdateWithoutPostsInput");
let LocationUpsertWithoutPostsInput = class LocationUpsertWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateWithoutPostsInput_1.LocationUpdateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationUpdateWithoutPostsInput_1.LocationUpdateWithoutPostsInput)
], LocationUpsertWithoutPostsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateWithoutPostsInput_1.LocationCreateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationCreateWithoutPostsInput_1.LocationCreateWithoutPostsInput)
], LocationUpsertWithoutPostsInput.prototype, "create", void 0);
LocationUpsertWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpsertWithoutPostsInput", {
        isAbstract: true
    })
], LocationUpsertWithoutPostsInput);
exports.LocationUpsertWithoutPostsInput = LocationUpsertWithoutPostsInput;
