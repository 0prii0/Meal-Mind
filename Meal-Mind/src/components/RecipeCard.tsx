import {motion} from 'framer-motion'
import type { Recipe } from "../types/recipe";


interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <motion.div
      className="border rounded-xl shadow-md p-4 hover:shadow-lg transition bg-white"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-lg mb-3 w-full object-cover h-48"
      />
      <h2 className="text-lg font-semibold text-gray-800">{recipe.strMeal}</h2>
      <p className="text-sm text-gray-500 mt-1">
        Category: {recipe.strCategory}
      </p>
      <a
        href={recipe.strSource || "#"}
        target="_blank"
        rel="noreferrer"
        className="text-orange-600 text-sm font-medium mt-2 inline-block hover:text-orange-700 transition"
      >
        View Recipe →
      </a>
    </motion.div>
  );
};

export default RecipeCard;