import React from 'react';
import RecipeCard from '../components/RecipeCard';

export default function FavoritesPage({ favorites, toggleFavorite }) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites added.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favorites.map((meal) => (
            <RecipeCard
              key={meal.idMeal}
              meal={meal}
              onClick={() => {}} // optional if modal not needed
              toggleFavorite={toggleFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
