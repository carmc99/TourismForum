"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationCreateNestedOneWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationCreateOrConnectWithoutPostsInput_1 = require("../inputs/LocationCreateOrConnectWithoutPostsInput");
const LocationCreateWithoutPostsInput_1 = require("../inputs/LocationCreateWithoutPostsInput");
const LocationWhereUniqueInput_1 = require("../inputs/LocationWhereUniqueInput");
let LocationCreateNestedOneWithoutPostsInput = class LocationCreateNestedOneWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateWithoutPostsInput_1.LocationCreateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateWithoutPostsInput_1.LocationCreateWithoutPostsInput)
], LocationCreateNestedOneWithoutPostsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutPostsInput_1.LocationCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateOrConnectWithoutPostsInput_1.LocationCreateOrConnectWithoutPostsInput)
], LocationCreateNestedOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], LocationCreateNestedOneWithoutPostsInput.prototype, "connect", void 0);
LocationCreateNestedOneWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationCreateNestedOneWithoutPostsInput", {
        isAbstract: true
    })
], LocationCreateNestedOneWithoutPostsInput);
exports.LocationCreateNestedOneWithoutPostsInput = LocationCreateNestedOneWithoutPostsInput;
