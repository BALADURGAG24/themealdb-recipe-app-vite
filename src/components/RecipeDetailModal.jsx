import React from 'react';

const RecipeDetailModal = ({ meal, onClose }) => {
  const ingredients = Object.keys(meal)
    .filter(key => key.startsWith('strIngredient') && meal[key])
    .map((key, index) => ({
      ingredient: meal[key],
      measure: meal[`strMeasure${index + 1}`],
    }));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-3xl overflow-y-auto max-h-[90vh] shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-2">{meal.strMeal}</h2>
        <p className="text-sm text-gray-500 mb-2">Category: {meal.strCategory} | Area: {meal.strArea}</p>

        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded-lg mb-4" />

        <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside mb-4">
          {ingredients.map((item, idx) => (
            <li key={idx}>
              {item.ingredient} - {item.measure}
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
        <p className="whitespace-pre-line text-sm mb-4">{meal.strInstructions}</p>

        {meal.strYoutube && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Watch Tutorial:</h3>
            <iframe
              title="YouTube Tutorial"
              className="w-full h-64"
              src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetailModal;
