"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelCreateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let HotelCreateWithoutPostsInput = class HotelCreateWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HotelCreateWithoutPostsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], HotelCreateWithoutPostsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], HotelCreateWithoutPostsInput.prototype, "price_per_night", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], HotelCreateWithoutPostsInput.prototype, "lunch_included", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], HotelCreateWithoutPostsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], HotelCreateWithoutPostsInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], HotelCreateWithoutPostsInput.prototype, "updated_at", void 0);
HotelCreateWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HotelCreateWithoutPostsInput", {
        isAbstract: true
    })
], HotelCreateWithoutPostsInput);
exports.HotelCreateWithoutPostsInput = HotelCreateWithoutPostsInput;
