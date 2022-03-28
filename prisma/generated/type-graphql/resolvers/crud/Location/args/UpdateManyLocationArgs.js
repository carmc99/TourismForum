"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyLocationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationUpdateManyMutationInput_1 = require("../../../inputs/LocationUpdateManyMutationInput");
const LocationWhereInput_1 = require("../../../inputs/LocationWhereInput");
let UpdateManyLocationArgs = class UpdateManyLocationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateManyMutationInput_1.LocationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationUpdateManyMutationInput_1.LocationUpdateManyMutationInput)
], UpdateManyLocationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationWhereInput_1.LocationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationWhereInput_1.LocationWhereInput)
], UpdateManyLocationArgs.prototype, "where", void 0);
UpdateManyLocationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyLocationArgs);
exports.UpdateManyLocationArgs = UpdateManyLocationArgs;
