import { useEffect, useState } from 'react'
import CategorySelector from './components/CategorySelector.jsx'
import Favorites from './components/Favorites.jsx'
import FoodResult from './components/FoodResult.jsx'
import RecentPicks from './components/RecentPicks.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import { foods } from './data/foods.js'

const FAVORITES_KEY = 'meal-picker-favorites'
const HISTORY_KEY = 'meal-picker-history'
const THEME_KEY = 'meal-picker-theme'

function loadSavedItems(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(key))
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_KEY)
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [selectedCategory, setSelectedCategory] = useState('Any')
  const [selectedFood, setSelectedFood] = useState(null)
  const [favorites, setFavorites] = useState(() => loadSavedItems(FAVORITES_KEY))
  const [history, setHistory] = useState(() => loadSavedItems(HISTORY_KEY).slice(0, 5))

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
  }, [history])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  function pickFood() {
    const categoryFoods = selectedCategory === 'Any'
      ? foods
      : foods.filter((food) => food.category === selectedCategory)

    const availableFoods = categoryFoods.length > 1 && selectedFood
      ? categoryFoods.filter((food) => food.id !== selectedFood.id)
      : categoryFoods

    const choice = availableFoods[Math.floor(Math.random() * availableFoods.length)]
    setSelectedFood(choice)
    setHistory((current) => [choice, ...current].slice(0, 5))
  }

  function toggleFavorite(food) {
    setFavorites((current) => {
      const alreadySaved = current.some((item) => item.id === food.id)
      return alreadySaved
        ? current.filter((item) => item.id !== food.id)
        : [food, ...current]
    })
  }

  const isSelectedFoodFavorite = selectedFood
    ? favorites.some((food) => food.id === selectedFood.id)
    : false

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="theme-toggle-wrap">
          <ThemeToggle
            theme={theme}
            onToggle={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
          />
        </div>
        <div className="hero-content">
          <span className="eyebrow">Dinner decisions, solved</span>
          <h1>What Should I Eat?</h1>
          <p>Can’t decide what to eat? Let us choose for you.</p>
        </div>
      </header>

      <main>
        <div className="picker-layout">
          <div className="picker-panel">
            <CategorySelector selectedCategory={selectedCategory} onSelect={setSelectedCategory} />

            <div className="pick-action">
              <span className="step-number">2</span>
              <button type="button" className="pick-button" onClick={pickFood}>
                <span aria-hidden="true">🎲</span> Pick My Food
              </button>
              <p>Selected: <strong>{selectedCategory}</strong></p>
            </div>
          </div>

          <div className="result-area">
            <FoodResult
              food={selectedFood}
              isFavorite={isSelectedFoodFavorite}
              onToggleFavorite={toggleFavorite}
              onTryAgain={pickFood}
            />
          </div>
        </div>

        <div className="saved-layout">
          <Favorites favorites={favorites} onRemove={(id) => setFavorites((current) => current.filter((food) => food.id !== id))} />
          <RecentPicks history={history} />
        </div>
      </main>

      <footer>
        <p>Made for hungry, indecisive people <span aria-hidden="true">🍴</span></p>
      </footer>
    </div>
  )
}

export default App
