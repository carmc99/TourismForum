"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AccountWhereUniqueInput = class AccountWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountWhereUniqueInput.prototype, "id", void 0);
AccountWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountWhereUniqueInput", {
        isAbstract: true
    })
], AccountWhereUniqueInput);
exports.AccountWhereUniqueInput = AccountWhereUniqueInput;
