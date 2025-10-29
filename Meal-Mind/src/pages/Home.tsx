import { AnimatePresence, motion } from "framer-motion";
import SearchBar from "../components/SearchBar";
import type { Recipe } from "../types/recipe";
import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";


const Home = () => {
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
    <div>
    <motion.div
      className="flex flex-col items-center justify-center text-center py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-4">
        Welcome to MealMind 🍽️
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl">
        Discover tasty recipes, find meal inspiration, and explore new flavors with
        MealMind — your smart recipe recommendation companion.
      </p>



      <SearchBar onSearch={fetchRecipes} />
       {recipes.length > 0 ? (
          recipes.map((r) => <RecipeCard key={r.idMeal} recipe={r} onSelect={setSelectedRecipe} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No recipes found. Try searching for "chicken" or "pasta".
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

export default Home;
