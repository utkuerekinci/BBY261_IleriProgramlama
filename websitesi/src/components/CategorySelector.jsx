import { categories } from '../data/foods.js'

function CategorySelector({ selectedCategory, onSelect }) {
  return (
    <section className="category-section" aria-labelledby="category-heading">
      <div className="section-heading">
        <span className="step-number">1</span>
        <div>
          <h2 id="category-heading">Canın ne çekiyor?</h2>
          <p>Bir kategori seç veya kararı şansa bırak.</p>
        </div>
      </div>

      <div className="category-grid">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.name
          return (
            <button
              className={`category-card ${isSelected ? 'is-selected' : ''}`}
              type="button"
              key={category.name}
              onClick={() => onSelect(category.name)}
              aria-pressed={isSelected}
            >
              <span className="category-emoji" aria-hidden="true">{category.emoji}</span>
              <span>{category.name}</span>
              {isSelected && <span className="checkmark" aria-hidden="true">✓</span>}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default CategorySelector
