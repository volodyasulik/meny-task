"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const common_1 = require("@nestjs/common");
const recipe_service_1 = require("./recipe.service");
let RecipeController = class RecipeController {
    constructor(recipeService) {
        this.recipeService = recipeService;
    }
    async getRecipes(ingredient, area, category) {
        if (ingredient)
            return this.recipeService.getRecipesByIngredient(ingredient);
        if (area)
            return this.recipeService.getRecipesByArea(area);
        if (category)
            return this.recipeService.getRecipesByCategory(category);
        return this.recipeService.getAllRecipes();
    }
    async getRecipeInfo(id) {
        return this.recipeService.getRecipeById(id);
    }
};
exports.RecipeController = RecipeController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('ingredient')),
    __param(1, (0, common_1.Query)('area')),
    __param(2, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "getRecipes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "getRecipeInfo", null);
exports.RecipeController = RecipeController = __decorate([
    (0, common_1.Controller)('recipes'),
    __metadata("design:paramtypes", [recipe_service_1.RecipeService])
], RecipeController);
//# sourceMappingURL=recipe.controller.js.map