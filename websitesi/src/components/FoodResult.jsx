function FoodResult({ food, isFavorite, onToggleFavorite, onTryAgain }) {
  if (!food) {
    return (
      <div className="result-placeholder">
        <span aria-hidden="true">🍽️</span>
        <p>Your next meal is one click away.</p>
      </div>
    )
  }

  return (
    <article className="result-card" key={food.id} aria-live="polite">
      <button
        type="button"
        className={`heart-button ${isFavorite ? 'is-favorite' : ''}`}
        onClick={() => onToggleFavorite(food)}
        aria-label={isFavorite ? `Remove ${food.name} from favorites` : `Add ${food.name} to favorites`}
        aria-pressed={isFavorite}
      >
        {isFavorite ? '♥' : '♡'}
      </button>
      <div className="result-emoji" aria-hidden="true">{food.emoji}</div>
      <span className="category-label">{food.category}</span>
      <h2>{food.name}</h2>
      <p>{food.description}</p>
      <button type="button" className="try-again-button" onClick={onTryAgain}>
        Try Again
      </button>
    </article>
  )
}

export default FoodResult
