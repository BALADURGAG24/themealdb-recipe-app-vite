import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import RecipeCard from './components/RecipeCard';
import Spinner from './components/Spinner';
import FavoritesPage from './pages/FavoritesPage';
import RecipeDetailModal from './components/RecipeDetailModal';
import useDarkMode from './hooks/useDarkMode';

const App = () => {
  const [query, setQuery] = useState(localStorage.getItem('lastQuery') || '');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);
  const [mealType, setMealType] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [autoCompleteList, setAutoCompleteList] = useState([]);

  useDarkMode();

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
      const data = await res.json();
      let meals = data.meals || [];

      if (mealType) {
        meals = meals.filter(m => m.strCategory?.toLowerCase() === mealType.toLowerCase());
      }

      if (sortBy === 'ingredients') {
        meals = meals.sort((a, b) => ingredientCount(a) - ingredientCount(b));
      }

      setRecipes(meals);
      localStorage.setItem('lastQuery', searchQuery);
    } catch (err) {
      setError('Something went wrong.');
    }
    setLoading(false);
  };

  const ingredientCount = (meal) =>
    Object.keys(meal).filter(k => k.startsWith('strIngredient') && meal[k]).length;

  useEffect(() => {
    if (query) fetchRecipes(query);
  }, [mealType, sortBy]);

  const toggleFavorite = (meal) => {
    const exists = favorites.find(fav => fav.idMeal === meal.idMeal);
    const updated = exists
      ? favorites.filter(fav => fav.idMeal !== meal.idMeal)
      : [...favorites, meal];
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const debouncedFetch = useCallback(
    debounce((value) => {
      if (value) fetchRecipes(value);
    }, 500), []
  );

  const handleSearch = (value) => {
    setQuery(value);
    debouncedFetch(value);
  };

  const fetchSuggestions = async (val) => {
    if (!val) return setAutoCompleteList([]);
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
    const data = await res.json();
    setAutoCompleteList(data.meals?.map(m => m.strMeal) || []);
  };

  const handleClearSuggestions = () => {
    setAutoCompleteList([]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-6">
        <Header />
        <nav className="flex gap-4 mb-4">
          <Link to="/" className="hover:underline">Search</Link>
          <Link to="/favorites" className="hover:underline">Favorites</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar
                  query={query}
                  onSearch={handleSearch}
                  suggestions={autoCompleteList}
                  onType={fetchSuggestions}
                  onClearSuggestions={handleClearSuggestions}
                />
                <Filters mealType={mealType} setMealType={setMealType} sortBy={sortBy} setSortBy={setSortBy} />

                {loading ? <Spinner /> : (
                  <motion.div layout className="grid md:grid-cols-3 gap-6">
                    <AnimatePresence>
                      {recipes.map((meal) => (
                        <RecipeCard
                          key={meal.idMeal}
                          meal={meal}
                          isFavorite={favorites.some(fav => fav.idMeal === meal.idMeal)}
                          toggleFavorite={toggleFavorite}
                          onClick={() => setSelectedRecipe(meal)}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                )}

                {error && <p className="text-red-500 mt-4">{error}</p>}
                {selectedRecipe && (
                  <RecipeDetailModal meal={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
                )}
              </>
            }
          />
          <Route
            path="/favorites"
            element={<FavoritesPage favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
