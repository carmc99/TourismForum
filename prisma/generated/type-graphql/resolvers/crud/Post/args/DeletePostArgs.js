"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePostArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostWhereUniqueInput_1 = require("../../../inputs/PostWhereUniqueInput");
let DeletePostArgs = class DeletePostArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], DeletePostArgs.prototype, "where", void 0);
DeletePostArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeletePostArgs);
exports.DeletePostArgs = DeletePostArgs;
