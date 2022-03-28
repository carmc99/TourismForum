"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesUpdateManyWithoutRolesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesCreateOrConnectWithoutRolesInput_1 = require("../inputs/PagesCreateOrConnectWithoutRolesInput");
const PagesCreateWithoutRolesInput_1 = require("../inputs/PagesCreateWithoutRolesInput");
const PagesScalarWhereInput_1 = require("../inputs/PagesScalarWhereInput");
const PagesUpdateManyWithWhereWithoutRolesInput_1 = require("../inputs/PagesUpdateManyWithWhereWithoutRolesInput");
const PagesUpdateWithWhereUniqueWithoutRolesInput_1 = require("../inputs/PagesUpdateWithWhereUniqueWithoutRolesInput");
const PagesUpsertWithWhereUniqueWithoutRolesInput_1 = require("../inputs/PagesUpsertWithWhereUniqueWithoutRolesInput");
const PagesWhereUniqueInput_1 = require("../inputs/PagesWhereUniqueInput");
let PagesUpdateManyWithoutRolesInput = class PagesUpdateManyWithoutRolesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesCreateWithoutRolesInput_1.PagesCreateWithoutRolesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesUpdateManyWithoutRolesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesCreateOrConnectWithoutRolesInput_1.PagesCreateOrConnectWithoutRolesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesUpdateManyWithoutRolesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesUpsertWithWhereUniqueWithoutRolesInput_1.PagesUpsertWithWhereUniqueWithoutRolesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesUpdateManyWithoutRolesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesWhereUniqueInput_1.PagesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesUpdateManyWithoutRolesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesWhereUniqueInput_1.PagesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesUpdateManyWithoutRolesInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesWhereUniqueInput_1.PagesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesUpdateManyWithoutRolesInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesWhereUniqueInput_1.PagesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesUpdateManyWithoutRolesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesUpdateWithWhereUniqueWithoutRolesInput_1.PagesUpdateWithWhereUniqueWithoutRolesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesUpdateManyWithoutRolesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesUpdateManyWithWhereWithoutRolesInput_1.PagesUpdateManyWithWhereWithoutRolesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesUpdateManyWithoutRolesInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesScalarWhereInput_1.PagesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PagesUpdateManyWithoutRolesInput.prototype, "deleteMany", void 0);
PagesUpdateManyWithoutRolesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesUpdateManyWithoutRolesInput", {
        isAbstract: true
    })
], PagesUpdateManyWithoutRolesInput);
exports.PagesUpdateManyWithoutRolesInput = PagesUpdateManyWithoutRolesInput;
