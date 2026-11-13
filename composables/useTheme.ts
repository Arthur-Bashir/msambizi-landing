type ThemeMode = 'dark' | 'light'

export function useTheme() {
  const theme = useState<ThemeMode>('msambizi-theme', () => 'dark')

  function applyTheme(value: ThemeMode) {
    theme.value = value
    if (!import.meta.client) return

    document.documentElement.dataset.theme = value
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', value === 'dark' ? '#0b182c' : '#f5f7fb')
    try {
      window.localStorage.setItem('msambizi-theme', value)
    } catch {
      // Keep the in-memory theme working when storage is unavailable.
    }
  }

  function initializeTheme() {
    if (!import.meta.client) return

    try {
      const savedTheme = window.localStorage.getItem('msambizi-theme')
      applyTheme(savedTheme === 'light' ? 'light' : 'dark')
    } catch {
      applyTheme('dark')
    }
  }

  function toggleTheme() {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return { theme, initializeTheme, toggleTheme }
}
