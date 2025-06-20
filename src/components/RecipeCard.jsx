import React from 'react';

const RecipeCard = ({ meal, isFavorite, toggleFavorite }) => {
  const ingredientCount = Object.keys(meal).filter(
    (key) => key.startsWith('strIngredient') && meal[key]
  ).length;

  const caloriesMock = Math.floor(Math.random() * 500 + 200); // Mocked calories

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h2 className="text-lg font-bold mb-1">{meal.strMeal}</h2>
      <p>Calories: {caloriesMock}</p>
      <p>Ingredients: {ingredientCount}</p>
      <div className="flex justify-between items-center mt-2">
        <a
          href={meal.strSource || `https://www.themealdb.com/meal/${meal.idMeal}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Recipe
        </a>
        <button onClick={() => toggleFavorite(meal)} className="text-xl">
          {isFavorite ? '💖' : '🤍'}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
