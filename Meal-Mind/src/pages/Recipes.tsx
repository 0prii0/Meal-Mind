import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";
import type { Recipe } from "../types/recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchMode, setSearchMode] = useState<"dish" | "ingredient">("dish");
  const [showNoResultPopup, setShowNoResultPopup] = useState(false);

  const fetchRecipes = async (query: string) => {
    if (!query) return;

    const endpoint =
      searchMode === "dish"
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        : `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`;

    const res = await fetch(endpoint);
    const data = await res.json();

    if (!data.meals) {
      setRecipes([]);
      setShowNoResultPopup(true);
      setTimeout(() => setShowNoResultPopup(false), 2500); // hide after 2.5s
    } else {
      setRecipes(data.meals);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">

      <motion.div
        className="text-center py-12 px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-4">
          Discover Deliciousness 🍲
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Hungry for something new? Enter a dish name and let{" "}
          <span className="text-orange-500 font-semibold">MealMind</span> inspire your next meal.
          From sweet desserts to spicy curries — your next favorite recipe is just a search away!
        </p>


        <div className="mt-6 flex justify-center gap-3">
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition ${searchMode === "dish"
              ? "bg-orange-500 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            onClick={() => setSearchMode("dish")}
          >
            Search by Dish
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition ${searchMode === "ingredient"
              ? "bg-orange-500 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            onClick={() => setSearchMode("ingredient")}
          >
            Search by Ingredient
          </button>
        </div>


      </motion.div>
      <SearchBar onSearch={fetchRecipes} />

      <motion.div

        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8"
        layout
      >


        {recipes.length > 0 ? (
          recipes.map((r) => (
            <RecipeCard key={r.idMeal} recipe={r} onSelect={setSelectedRecipe} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Try searching for your favorite ingredient 🍔
          </p>
        )}
      </motion.div>

      <AnimatePresence>
        {showNoResultPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg z-50"
          >
            ❌ No recipes found. Try a different search!
          </motion.div>
        )}
      </AnimatePresence>


      <AnimatePresence>
        {selectedRecipe && (
          <RecipeModal
            recipe={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Recipes;
