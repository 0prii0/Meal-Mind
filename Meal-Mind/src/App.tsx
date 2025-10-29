import {useState} from 'react'
import Navbar from "./components/Navbar"
import type { Recipe } from './types/recipe';
import {motion} from 'framer-motion'
import { AnimatePresence } from "framer-motion";
import RecipeModal from './components/RecipeModal';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';


function App() {

 const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  
  

  return (
  <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
     

      <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 pb-12"
  layout
  transition={{ duration: 0.4 }}
>
        
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
  )
}

export default App
