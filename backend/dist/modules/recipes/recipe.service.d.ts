export declare class RecipeService {
    getAllRecipes(): Promise<any>;
    getRecipesByIngredient(ingredient: string): Promise<any>;
    getRecipesByArea(area: string): Promise<any>;
    getRecipesByCategory(category: string): Promise<any>;
    getRecipeById(id: string): Promise<any>;
}
