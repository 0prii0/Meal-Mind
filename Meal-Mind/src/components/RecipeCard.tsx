import type { Recipe } from "../types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="border rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-lg mb-3" 
      />
      <h2 className="text-lg font-semibold">{recipe.strMeal}</h2>
      <p className="text-sm text-gray-500 mt-1">
        Category: {recipe.strCategory}
      </p>
      <a
        href={recipe.strSource || "#"}
        target="_blank"
        rel="noreferrer"
        className="text-orange-600 text-sm font-medium mt-2 inline-block"
      >
        View Recipe →
      </a>
    </div>
  );
};

export default RecipeCard;