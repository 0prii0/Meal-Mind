import { motion } from "framer-motion";
import type { Recipe } from "../types/recipe";

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

const RecipeModal = ({ recipe, onClose }: RecipeModalProps) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-6 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 relative overflow-y-auto max-h-[90vh]"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ✕
        </button>

        {/* Recipe Content */}
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-xl mb-4 w-full object-cover h-56"
        />
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-500 mb-3">Category: {recipe.strCategory}</p>

        {recipe.strInstructions && (
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            {recipe.strInstructions.slice(0, 300)}...
          </p>
        )}

        {recipe.strSource && (
          <a
            href={recipe.strSource}
            target="_blank"
            rel="noreferrer"
            className="text-orange-600 hover:text-orange-700 font-semibold"
          >
            View Full Recipe →
          </a>
        )}
      </motion.div>
    </div>
  );
};

export default RecipeModal;