import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
    <motion.div
      className="max-w-3xl mx-auto py-20 px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-orange-600 mb-4">About MealMind</h2>
      <p className="text-gray-700 leading-relaxed">
        MealMind is a smart recipe discovery platform built with React, TypeScript, and Tailwind CSS.
        It helps users explore delicious meals from around the world, powered by the open
        <a
          href="https://www.themealdb.com/"
          className="text-orange-500 font-semibold mx-1"
          target="_blank"
          rel="noreferrer"
        >
          TheMealDB
        </a>
        API. Whether you’re a home cook or a foodie, MealMind inspires your next dish with simplicity and style.
      </p>
    </motion.div>
    </div>
  );
};

export default About;
