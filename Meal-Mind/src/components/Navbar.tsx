import { motion } from "framer-motion"
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const linkClass =
    "hover:text-orange-600 transition font-medium";

  return (
    <motion.nav
      className="flex justify-between items-center py-4 px-8 bg-white shadow-md"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-2xl font-bold text-orange-600">MealMind</h1>
      <ul className="flex gap-6 text-gray-700 font-semibold">
        <NavLink to="/home" className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/recipes" className={linkClass}>
          Recipes
        </NavLink>
        
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
      </ul>
    </motion.nav>
  );
};

export default Navbar;