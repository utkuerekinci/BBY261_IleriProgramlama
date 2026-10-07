function RecentPicks({ history }) {
  return (
    <section className="saved-panel" aria-labelledby="recent-heading">
      <div className="panel-title-row">
        <h2 id="recent-heading"><span aria-hidden="true">↻</span> Recently Picked</h2>
      </div>

      {history.length === 0 ? (
        <p className="empty-message">Your last five picks will appear here.</p>
      ) : (
        <ol className="meal-list recent-list">
          {history.map((food, index) => (
            <li key={`${food.id}-${index}`}>
              <span className="list-emoji" aria-hidden="true">{food.emoji}</span>
              <span className="list-copy"><strong>{food.name}</strong><small>{food.category}</small></span>
              <span className="history-number">{index + 1}</span>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}

export default RecentPicks
