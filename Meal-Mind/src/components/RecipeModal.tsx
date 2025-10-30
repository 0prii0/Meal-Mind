import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Recipe } from "../types/recipe";

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

const RecipeModal = ({ recipe, onClose }: RecipeModalProps) => {
  const [fullRecipe, setFullRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchFullRecipe = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`
        );
        const data = await res.json();
        if (data.meals && data.meals[0]) {
          setFullRecipe(data.meals[0]);
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchFullRecipe();
  }, [recipe.idMeal]);

  const meal = fullRecipe || recipe;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-lg p-6 relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-3xl font-bold text-orange-600 mb-4 text-center">
          {meal.strMeal}
        </h2>

        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full rounded-xl mb-4 shadow-md"
        />

        {fullRecipe ? (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🍴 Ingredients
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
              {Array.from({ length: 20 })
                .map((_, i) => ({
                  ingredient: meal[`strIngredient${i + 1}`],
                  measure: meal[`strMeasure${i + 1}`],
                }))
                .filter((item) => item.ingredient && item.ingredient.trim() !== "")
                .map((item, i) => (
                  <li key={i}>
                    {item.ingredient} – {item.measure}
                  </li>
                ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🧾 Instructions
            </h3>
            <p className="text-gray-600 whitespace-pre-line leading-relaxed">
              {meal.strInstructions}
            </p>

            
          </>
        ) : (
          <p className="text-gray-500 text-center">Loading details...</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default RecipeModal;
