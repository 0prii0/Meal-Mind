import { motion } from "framer-motion"


const Navbar = () => {
  return (
    <motion.nav
      className="flex justify-between items-center py-4 px-8 bg-white shadow-md"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-2xl font-bold text-orange-600">MealMind</h1>
      <ul className="flex gap-6 text-gray-700 font-semibold">
        <li><a href="#">Home</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;