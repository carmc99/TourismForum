"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Biome_1 = require("../../enums/Biome");
let PostCreateManyLocationInput = class PostCreateManyLocationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyLocationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyLocationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Biome_1.Biome, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyLocationInput.prototype, "biome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyLocationInput.prototype, "hotelId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyLocationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyLocationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyLocationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PostCreateManyLocationInput.prototype, "average_score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateManyLocationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateManyLocationInput.prototype, "updated_at", void 0);
PostCreateManyLocationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateManyLocationInput", {
        isAbstract: true
    })
], PostCreateManyLocationInput);
exports.PostCreateManyLocationInput = PostCreateManyLocationInput;
