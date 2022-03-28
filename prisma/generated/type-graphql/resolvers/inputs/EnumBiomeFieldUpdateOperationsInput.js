"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumBiomeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Biome_1 = require("../../enums/Biome");
let EnumBiomeFieldUpdateOperationsInput = class EnumBiomeFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Biome_1.Biome, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumBiomeFieldUpdateOperationsInput.prototype, "set", void 0);
EnumBiomeFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumBiomeFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumBiomeFieldUpdateOperationsInput);
exports.EnumBiomeFieldUpdateOperationsInput = EnumBiomeFieldUpdateOperationsInput;
