import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";
import type { Recipe } from "../types/recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const fetchRecipes = async (query: string) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    setRecipes(data.meals || []);
  };

  return (
    <div className="min-h-screen  from-orange-50 to-white pb-12">

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
