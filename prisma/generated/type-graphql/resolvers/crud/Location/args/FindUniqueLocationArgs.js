"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLocationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationWhereUniqueInput_1 = require("../../../inputs/LocationWhereUniqueInput");
let FindUniqueLocationArgs = class FindUniqueLocationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereUniqueInput_1.LocationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationWhereUniqueInput_1.LocationWhereUniqueInput)
], FindUniqueLocationArgs.prototype, "where", void 0);
FindUniqueLocationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueLocationArgs);
exports.FindUniqueLocationArgs = FindUniqueLocationArgs;
