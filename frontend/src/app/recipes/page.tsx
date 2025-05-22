"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { RecipeCard } from "@/components/RecipeCard";
import { apiGet } from "@/lib/api";

type Recipe = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strInstructions: string;
};

export default function RecipeListPage() {
  const [meals, setMeals] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const searchParams = useSearchParams();
  const ingredient = searchParams.get("ingredient");
  const category = searchParams.get("category");
  const area = searchParams.get("area");

  useEffect(() => {
    setLoading(true);
    setError(false);

    let query = "";
    if (ingredient) query = `?ingredient=${ingredient}`;
    else if (category) query = `?category=${category}`;
    else if (area) query = `?area=${area}`;

    apiGet<{ meals: Recipe[] }>(`/recipes${query}`)
      .then((res) => setMeals(res.meals || []))
      .catch((err) => {
        console.error("Failed to load recipes:", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [ingredient, category, area]);

  const getTitle = () => {
    if (ingredient) return `Recipes with ${ingredient}`;
    if (category) return `${category} Recipes`;
    if (area) return `${area} Cuisine`;
    return "All Recipes";
  };

  const getShortDescription = (text?: string) => {
    return text ? text.slice(0, 100) + "..." : "";
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{getTitle()}</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">Error loading recipes.</p>
      ) : meals.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <RecipeCard
              key={meal.idMeal}
              id={meal.idMeal}
              title={meal.strMeal}
              category={meal.strCategory}
              image={meal.strMealThumb}
              description={getShortDescription(meal.strInstructions)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
