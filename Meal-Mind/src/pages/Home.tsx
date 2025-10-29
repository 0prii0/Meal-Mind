import { motion } from "framer-motion";

const Home = () => {
  return (
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
    </motion.div>
  );
};

export default Home;
