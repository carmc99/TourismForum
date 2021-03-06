"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateInput_1 = require("../../../inputs/SessionCreateInput");
let CreateSessionArgs = class CreateSessionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateInput_1.SessionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionCreateInput_1.SessionCreateInput)
], CreateSessionArgs.prototype, "data", void 0);
CreateSessionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateSessionArgs);
exports.CreateSessionArgs = CreateSessionArgs;
