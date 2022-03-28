"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateManyWithoutPagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateOrConnectWithoutPagesInput_1 = require("../inputs/RoleCreateOrConnectWithoutPagesInput");
const RoleCreateWithoutPagesInput_1 = require("../inputs/RoleCreateWithoutPagesInput");
const RoleScalarWhereInput_1 = require("../inputs/RoleScalarWhereInput");
const RoleUpdateManyWithWhereWithoutPagesInput_1 = require("../inputs/RoleUpdateManyWithWhereWithoutPagesInput");
const RoleUpdateWithWhereUniqueWithoutPagesInput_1 = require("../inputs/RoleUpdateWithWhereUniqueWithoutPagesInput");
const RoleUpsertWithWhereUniqueWithoutPagesInput_1 = require("../inputs/RoleUpsertWithWhereUniqueWithoutPagesInput");
const RoleWhereUniqueInput_1 = require("../inputs/RoleWhereUniqueInput");
let RoleUpdateManyWithoutPagesInput = class RoleUpdateManyWithoutPagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleCreateWithoutPagesInput_1.RoleCreateWithoutPagesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleUpdateManyWithoutPagesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleCreateOrConnectWithoutPagesInput_1.RoleCreateOrConnectWithoutPagesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleUpdateManyWithoutPagesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleUpsertWithWhereUniqueWithoutPagesInput_1.RoleUpsertWithWhereUniqueWithoutPagesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleUpdateManyWithoutPagesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereUniqueInput_1.RoleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleUpdateManyWithoutPagesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereUniqueInput_1.RoleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleUpdateManyWithoutPagesInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereUniqueInput_1.RoleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleUpdateManyWithoutPagesInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereUniqueInput_1.RoleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleUpdateManyWithoutPagesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleUpdateWithWhereUniqueWithoutPagesInput_1.RoleUpdateWithWhereUniqueWithoutPagesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleUpdateManyWithoutPagesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleUpdateManyWithWhereWithoutPagesInput_1.RoleUpdateManyWithWhereWithoutPagesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleUpdateManyWithoutPagesInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleScalarWhereInput_1.RoleScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleUpdateManyWithoutPagesInput.prototype, "deleteMany", void 0);
RoleUpdateManyWithoutPagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateManyWithoutPagesInput", {
        isAbstract: true
    })
], RoleUpdateManyWithoutPagesInput);
exports.RoleUpdateManyWithoutPagesInput = RoleUpdateManyWithoutPagesInput;
