import { useState } from "react";
import { motion } from "framer-motion";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex justify-center mt-10 mb-6 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
     <input
        type="text"
        placeholder="Search recipes by ingredient..."
        className="border border-gray-300 rounded-l-lg px-4 py-2 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 rounded-r-lg hover:bg-orange-600 transition"
      >
        Search
      </button>
    </motion.form>
  );
};

export default SearchBar;