"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const RoleUpdateManyWithoutPagesInput_1 = require("../inputs/RoleUpdateManyWithoutPagesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PagesUpdateInput = class PagesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PagesUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PagesUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PagesUpdateInput.prototype, "path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateManyWithoutPagesInput_1.RoleUpdateManyWithoutPagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleUpdateManyWithoutPagesInput_1.RoleUpdateManyWithoutPagesInput)
], PagesUpdateInput.prototype, "roles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PagesUpdateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PagesUpdateInput.prototype, "updated_at", void 0);
PagesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesUpdateInput", {
        isAbstract: true
    })
], PagesUpdateInput);
exports.PagesUpdateInput = PagesUpdateInput;
