import React from 'react';

const Header = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  };

  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">🍽️ Recipe Finder</h1>
      <button
        onClick={toggleDarkMode}
        className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        Toggle Dark Mode
      </button>
    </header>
  );
};

export default Header;
