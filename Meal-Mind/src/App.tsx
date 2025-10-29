import {useState} from 'react'
import Navbar from "./components/Navbar"
import type { Recipe } from './types/recipe';

import RecipeCard from './components/RecipeCard';
import SearchBar from '../src/components/Searchbar';


function App() {
 const [recipes, setRecipes] = useState<Recipe[]>([]);

    const fetchRecipes = async (query: string) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    setRecipes(data.meals || []);
  };
  

  return (
  <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SearchBar onSearch={fetchRecipes} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8">
        {recipes.length > 0 ? (
          recipes.map((r) => <RecipeCard key={r.idMeal} recipe={r} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No recipes found. Try searching for "chicken" or "pasta".
          </p>
        )}
      </div>
    </div>
  )
}

export default App
