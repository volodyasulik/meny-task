"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let RecipeService = class RecipeService {
    async getAllRecipes() {
        const { data } = await axios_1.default.get(`${process.env.BASE_URL}/search.php?s=`);
        return data;
    }
    async getRecipesByIngredient(ingredient) {
        const { data } = await axios_1.default.get(`${process.env.BASE_URL}/filter.php?i=${ingredient}`);
        return data;
    }
    async getRecipesByArea(area) {
        const { data } = await axios_1.default.get(`${process.env.BASE_URL}/filter.php?a=${area}`);
        return data;
    }
    async getRecipesByCategory(category) {
        const { data } = await axios_1.default.get(`${process.env.BASE_URL}/filter.php?c=${category}`);
        return data;
    }
    async getRecipeById(id) {
        const { data } = await axios_1.default.get(`${process.env.BASE_URL}/lookup.php?i=${id}`);
        return data;
    }
};
exports.RecipeService = RecipeService;
exports.RecipeService = RecipeService = __decorate([
    (0, common_1.Injectable)()
], RecipeService);
//# sourceMappingURL=recipe.service.js.map