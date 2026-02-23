# 🍽️ Recipe Finder App

The **Recipe Finder App** is a feature-rich, responsive, and stylish web application built using **React**, designed to help users discover and explore meals from around the world using [TheMealDB API](https://www.themealdb.com). It includes live search with suggestions, filtering, sorting, animated recipe cards, and persistent favorites.

--- 
   
## 🌟 Features      
           
### 🔍 Smart Search                
- Autocomplete suggestions as you type.  
- Powered by lodash.debounce for smooth performance.                
         
### 📂 Meal Type Filters        
- Filter recipes by categories like Beef, Chicken, Vegan, etc.   
    
### 🧮 Sorting  
- Sort recipes based on the number of ingredients (ascending/descending).

### ❤️ Favorites
- Toggle favorite meals using heart emojis (❤️ / 🤍).
- Persist favorites using localStorage.
- View your favorites on a dedicated `/favorites` page. 

### 🌘 Dark Mode Support
- Toggle dark/light theme using a moon/sun icon.
- Theme is saved to localStorage and persists across sessions.

### 🎴 Animated UI
- Uses Framer Motion for smooth recipe card transitions and interactivity.

### 📱 Fully Responsive
- Mobile-friendly and adaptable to different screen sizes.

### 🧾 Recipe Detail Modal
- Click any recipe card to view full instructions and ingredients in a modal.
- Watch YouTube tutorials if available.

### 👀 Recently Viewed
- Keeps track of meals you've recently viewed for easy access.

---

## 🚀 Getting Started

### 🧰 Prerequisites

Ensure you have the following installed:

- Node.js (v14 or above)
- npm or yarn

### 📦 Install Dependencies

```bash
npm install
# or
yarn install
```

### 🧑‍💻 Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to open the app.

---

## 🛠️ Tech Stack

| Tech                | Description                                 |
|---------------------|---------------------------------------------|
| **React**           | UI library for building the app             |
| **React Router**    | For routing between Home and Favorites      |
| **Tailwind CSS**    | Utility-first CSS for rapid UI development |
| **Framer Motion**   | For animations and transitions              |
| **Lodash.debounce** | Debounce function for input throttling     |
| **TheMealDB API**   | Meal data provider                         |
| **Vite**            | Lightning fast bundler and dev server       |

---

## 📁 File Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Filters.jsx
│   ├── SearchBar.jsx
│   ├── RecipeCard.jsx
│   ├── RecipeDetailModal.jsx
│   ├── RecentlyViewed.jsx
│   └── Spinner.jsx
├── hooks/
│   └── useDarkMode.js
├── pages/
│   ├── HomePage.jsx
│   └── FavoritesPage.jsx
├── App.jsx
└── main.jsx
```

---

## 📌 API Reference

All data is fetched from **TheMealDB**:

- 🔍 Search meals:  
  `https://www.themealdb.com/api/json/v1/1/search.php?s=<query>`

- 🔎 Get full meal by ID:  
  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=<meal_id>`

- 🗂️ Get meal categories:  
  `https://www.themealdb.com/api/json/v1/1/categories.php`

---



## 🧠 LocalStorage Usage

- `theme`: stores user's dark/light preference
- `favorites`: list of favorite meals (`idMeal`)
- `recentlyViewed`: list of recently viewed meals

---

## 🧪 Potential Enhancements

- 🧾 **Shopping List**: Add recipes to a shopping list generator.
- 👨‍🍳 **User Login**: Save favorites to cloud accounts.
- 🗺️ **Cuisine Filters**: Filter meals by region (e.g., Indian, Mexican).
- 🧭 **Pagination or Infinite Scroll**: For large search results.
- 💬 **Comments Section**: Allow users to review meals.
- 📲 **PWA Support**: Install the app on mobile devices.

---

## 📤 Deployment

You can deploy this app on platforms like:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

For example, to deploy with Vercel:

```bash
npm install -g vercel
vercel
```

---

## 👤 Author

Made with 💖 by [BALADURGAG24](https://github.com/BALADURGAG24)

If you found this useful, consider leaving a ⭐️ on the repo!

---

## 📄 License

This project is open source and available under the **MIT License**.
