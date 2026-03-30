import './style.css'

const html = document.documentElement
const toggle = document.getElementById('themeToggle')

// Respect saved preference, then system preference
const saved = localStorage.getItem('tc-theme')
if (saved) {
  html.setAttribute('data-theme', saved)
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  html.setAttribute('data-theme', 'light')
}

toggle?.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  html.setAttribute('data-theme', next)
  localStorage.setItem('tc-theme', next)
})
