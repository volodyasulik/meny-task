import { Injectable } from '@nestjs/common';
import axios from 'axios';

// const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

@Injectable()
export class RecipeService {
  async getAllRecipes() {
    const { data } = await axios.get(`${process.env.BASE_URL}/search.php?s=`);
    return data;
  }

  async getRecipesByIngredient(ingredient: string) {
    const { data } = await axios.get(
      `${process.env.BASE_URL}/filter.php?i=${ingredient}`,
    );
    return data;
  }

  async getRecipesByArea(area: string) {
    const { data } = await axios.get(
      `${process.env.BASE_URL}/filter.php?a=${area}`,
    );
    return data;
  }

  async getRecipesByCategory(category: string) {
    const { data } = await axios.get(
      `${process.env.BASE_URL}/filter.php?c=${category}`,
    );
    return data;
  }

  async getRecipeById(id: string) {
    const { data } = await axios.get(
      `${process.env.BASE_URL}/lookup.php?i=${id}`,
    );
    return data;
  }
}
