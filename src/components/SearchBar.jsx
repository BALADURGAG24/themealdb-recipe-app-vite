import React, { useState } from 'react';

const SearchBar = ({ query, onSearch, suggestions, onType, onClearSuggestions }) => {
  const [input, setInput] = useState(query || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    onClearSuggestions && onClearSuggestions();
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
    onType(val);
  };

  const handleSelect = (val) => {
    setInput(val);
    onSearch(val);
    onClearSuggestions && onClearSuggestions();
  };

  return (
    <div className="relative mb-6">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search for a recipe..."
          className="flex-1 p-2 rounded-l border border-gray-300 dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Search
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-gray-100 dark:bg-gray-700 border border-t-0 rounded-b max-h-40 overflow-y-auto">
          {suggestions.map((s, idx) => (
            <li
              key={idx}
              className="p-2 cursor-pointer hover:bg-blue-200 dark:hover:bg-gray-600"
              onClick={() => handleSelect(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
