"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateOrConnectWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateWithoutPostsInput_1 = require("../inputs/LocationCreateWithoutPostsInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationCreateOrConnectWithoutPostsInput = class LocationCreateOrConnectWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationCreateOrConnectWithoutPostsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateWithoutPostsInput_1.LocationCreateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationCreateWithoutPostsInput_1.LocationCreateWithoutPostsInput)
], LocationCreateOrConnectWithoutPostsInput.prototype, "create", void 0);
LocationCreateOrConnectWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateOrConnectWithoutPostsInput", {
        isAbstract: true
    })
], LocationCreateOrConnectWithoutPostsInput);
exports.LocationCreateOrConnectWithoutPostsInput = LocationCreateOrConnectWithoutPostsInput;
