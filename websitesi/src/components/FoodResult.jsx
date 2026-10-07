function FoodResult({ food, isFavorite, onToggleFavorite, onTryAgain }) {
  if (!food) {
    return (
      <div className="result-placeholder">
        <span aria-hidden="true">🍽️</span>
        <p>Sıradaki yemeğin yalnızca bir tık uzağında.</p>
      </div>
    )
  }

  return (
    <article className="result-card" key={food.id} aria-live="polite">
      <button
        type="button"
        className={`heart-button ${isFavorite ? 'is-favorite' : ''}`}
        onClick={() => onToggleFavorite(food)}
        aria-label={isFavorite ? `${food.name} favorilerden çıkar` : `${food.name} favorilere ekle`}
        aria-pressed={isFavorite}
      >
        {isFavorite ? '♥' : '♡'}
      </button>
      <div className="result-emoji" aria-hidden="true">{food.emoji}</div>
      <span className="category-label">{food.category}</span>
      <h2>{food.name}</h2>
      <p>{food.description}</p>
      <button type="button" className="try-again-button" onClick={onTryAgain}>
        Tekrar Dene
      </button>
    </article>
  )
}

export default FoodResult
