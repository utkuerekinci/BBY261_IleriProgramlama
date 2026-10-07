function Favorites({ favorites, onRemove }) {
  return (
    <section className="saved-panel" aria-labelledby="favorites-heading">
      <div className="panel-title-row">
        <h2 id="favorites-heading"><span aria-hidden="true">♥</span> Favorites</h2>
        <span className="count-badge">{favorites.length}</span>
      </div>

      {favorites.length === 0 ? (
        <p className="empty-message">Tap the heart on a meal to save it here.</p>
      ) : (
        <ul className="meal-list">
          {favorites.map((food) => (
            <li key={food.id}>
              <span className="list-emoji" aria-hidden="true">{food.emoji}</span>
              <span className="list-copy"><strong>{food.name}</strong><small>{food.category}</small></span>
              <button type="button" onClick={() => onRemove(food.id)} aria-label={`Remove ${food.name} from favorites`}>×</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Favorites
