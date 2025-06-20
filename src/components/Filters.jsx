import React from 'react';

const Filters = ({ mealType, setMealType, sortBy, setSortBy }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        value={mealType}
        onChange={(e) => setMealType(e.target.value)}
        className="p-2 rounded border dark:bg-gray-800"
      >
        <option value="">All Meal Types</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Dessert">Dessert</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="p-2 rounded border dark:bg-gray-800"
      >
        <option value="">No Sorting</option>
        <option value="calories">Sort by Calories</option>
        <option value="ingredients">Sort by Ingredient Count</option>
      </select>
    </div>
  );
};

export default Filters;
