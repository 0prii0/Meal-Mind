import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  const getLinkClass = ({ isActive }: { isActive: boolean }): string => {
    const baseClasses = "hover:text-orange-600 transition font-medium";
    return isActive
      ? `${baseClasses} text-orange-600` 
            : `${baseClasses} text-gray-700`; 
  };

  return (
    <motion.nav
      className="flex justify-between items-center py-4 px-8 bg-white shadow-md"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <NavLink to="/">
        <h1 className="text-2xl font-bold text-orange-600">MealMind</h1>
      </NavLink>
      <ul className="flex gap-6 font-semibold">
        <NavLink to="/home" className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/recipes" className={getLinkClass}>
          Recipes
        </NavLink>
        <NavLink to="/about" className={getLinkClass}>
          About
        </NavLink>
      </ul>
    </motion.nav>
  );
};

export default Navbar;