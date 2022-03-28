"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LocationWhereUniqueInput = class LocationWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LocationWhereUniqueInput.prototype, "id", void 0);
LocationWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationWhereUniqueInput", {
        isAbstract: true
    })
], LocationWhereUniqueInput);
exports.LocationWhereUniqueInput = LocationWhereUniqueInput;
