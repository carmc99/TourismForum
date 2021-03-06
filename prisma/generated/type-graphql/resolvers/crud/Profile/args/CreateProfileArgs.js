"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCreateInput_1 = require("../../../inputs/ProfileCreateInput");
let CreateProfileArgs = class CreateProfileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCreateInput_1.ProfileCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProfileCreateInput_1.ProfileCreateInput)
], CreateProfileArgs.prototype, "data", void 0);
CreateProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateProfileArgs);
exports.CreateProfileArgs = CreateProfileArgs;
