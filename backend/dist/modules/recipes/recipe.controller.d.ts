import { RecipeService } from './recipe.service';
export declare class RecipeController {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
    getRecipes(ingredient?: string, area?: string, category?: string): Promise<any>;
    getRecipeInfo(id: string): Promise<any>;
}
