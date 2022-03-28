"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProfileCountAggregate_1 = require("../outputs/ProfileCountAggregate");
const ProfileMaxAggregate_1 = require("../outputs/ProfileMaxAggregate");
const ProfileMinAggregate_1 = require("../outputs/ProfileMinAggregate");
let ProfileGroupBy = class ProfileGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileGroupBy.prototype, "phone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileGroupBy.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileGroupBy.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileGroupBy.prototype, "countryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProfileGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ProfileGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ProfileGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileCountAggregate_1.ProfileCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileCountAggregate_1.ProfileCountAggregate)
], ProfileGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileMinAggregate_1.ProfileMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileMinAggregate_1.ProfileMinAggregate)
], ProfileGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProfileMaxAggregate_1.ProfileMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProfileMaxAggregate_1.ProfileMaxAggregate)
], ProfileGroupBy.prototype, "_max", void 0);
ProfileGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProfileGroupBy", {
        isAbstract: true
    })
], ProfileGroupBy);
exports.ProfileGroupBy = ProfileGroupBy;
