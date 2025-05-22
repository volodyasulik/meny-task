import { Controller, Get, Param, Query } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  async getRecipes(
    @Query('ingredient') ingredient?: string,
    @Query('area') area?: string,
    @Query('category') category?: string,
  ) {
    if (ingredient)
      return this.recipeService.getRecipesByIngredient(ingredient);
    if (area) return this.recipeService.getRecipesByArea(area);
    if (category) return this.recipeService.getRecipesByCategory(category);
    return this.recipeService.getAllRecipes();
  }

  @Get(':id')
  async getRecipeInfo(@Param('id') id: string) {
    return this.recipeService.getRecipeById(id);
  }
}
