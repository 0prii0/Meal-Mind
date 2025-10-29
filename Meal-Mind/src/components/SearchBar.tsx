import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="flex justify-center mt-10 mb-6">
      <input
        type="text"
        placeholder="Search recipes by ingredient..."
        className="border border-gray-300 rounded-l-lg px-4 py-2 w-64 focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 rounded-r-lg hover:bg-orange-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;