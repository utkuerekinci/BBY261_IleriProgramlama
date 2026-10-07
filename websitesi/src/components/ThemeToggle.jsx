function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`${isDark ? 'Açık' : 'Koyu'} temaya geç`}
      title={`${isDark ? 'Açık' : 'Koyu'} temaya geç`}
    >
      <span className="theme-toggle-icon" aria-hidden="true">{isDark ? '☀' : '☾'}</span>
      <span>{isDark ? 'Açık' : 'Koyu'}</span>
    </button>
  )
}

export default ThemeToggle
