"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { apiGet } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

type Recipe = {
  idMeal: string;
  strMeal: string;
  strArea: string;
  strCategory: string;
  strMealThumb: string;
  strInstructions: string;
  [key: `strIngredient${number}`]: string;
  [key: `strMeasure${number}`]: string;
};

export default function RecipeInfoPage() {
  const params = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await apiGet<{ meals: Recipe[] }>(`/recipes/${params.id}`);
        setRecipe(data.meals?.[0] || null);
      } catch (error) {
        console.error("Failed to load recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [params.id]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (!recipe) return <div className="p-6 text-center">Recipe not found</div>;

  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const name = recipe[`strIngredient${i + 1}`];
    const measure = recipe[`strMeasure${i + 1}`];
    return name?.trim() ? `${measure?.trim() || ""} ${name.trim()}` : null;
  }).filter(Boolean);

  const instruction = recipe.strInstructions ? recipe.strInstructions : "";
  const steps = instruction
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0);

  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 bg-[#fffaf7] min-h-screen text-[#3b3b3b] text-[16px]">
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-4xl font-extrabold text-[#772f1a]">
            {recipe.strMeal}
          </h1>
          <Link
            href={`/recipes?area=${recipe.strArea}`}
            className="text-md font-semibold text-[#964f30] hover:underline"
          >
            {recipe.strArea}
          </Link>
        </div>

        <section className="flex flex-col md:flex-row gap-6 p-4 border border-[#e6d3c8] rounded-lg shadow-sm bg-white">
          <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-md overflow-hidden border">
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#a15339] mb-3">
              Ingredients
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-[#3b3b3b] text-[15px]">
              {ingredients.map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/recipes?ingredient=${encodeURIComponent(
                      item ?  item.split(" ").slice(-1)[0] : ''
                    )}`}
                    className="text-[#5e4035] font-medium hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="p-4 border border-[#e6d3c8] rounded-lg shadow-sm bg-white">
          <h2 className="text-2xl font-bold text-[#a15339] mb-3">
            Instructions
          </h2>
          <ul className="list-decimal pl-6 space-y-3 leading-relaxed">
            {steps.map((step, i) => (
              <li key={i} className="text-[#3b3b3b] font-normal">
                {step}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <aside className="w-full md:w-64 md:border-l border-t md:border-t-0 border-[#e6d3c8] md:pl-6 pt-6 md:pt-0">
        <div className="p-4 border border-[#e6d3c8] rounded-lg shadow-sm bg-white">
          <h3 className="text-lg font-semibold text-[#a15339] mb-2">
            More in category
          </h3>
          <Link
            href={`/recipes?category=${encodeURIComponent(recipe.strCategory)}`}
            className="text-[#5e4035] font-medium hover:underline"
          >
            {recipe.strCategory}
          </Link>
        </div>
      </aside>
    </div>
  );
}
