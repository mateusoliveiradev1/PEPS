// Tema Dark/Light
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function setTheme(theme) {
  if (theme === 'dark') {
    root.classList.add('dark');
    document.body.classList.remove('bg-gradient-to-b', 'from-green-100', 'to-green-50');
    document.body.classList.add('bg-gradient-to-b', 'from-gray-900', 'to-gray-800', 'text-white');
    themeToggle.textContent = '🌙';
  } else {
    root.classList.remove('dark');
    document.body.classList.remove('bg-gradient-to-b', 'from-gray-900', 'to-gray-800', 'text-white');
    document.body.classList.add('bg-gradient-to-b', 'from-green-100', 'to-green-50', 'text-gray-800');
    themeToggle.textContent = '☀️';
  }
}

if (localStorage.getItem('theme') === 'dark') {
  setTheme('dark');
} else {
  setTheme('light');
}

themeToggle.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  setTheme(currentTheme);
});

