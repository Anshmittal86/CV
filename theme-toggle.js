document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const userPreference = localStorage.getItem('theme');

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    themeIcon.textContent = theme === 'dark' ? '🌙' : '🌞';
  };

  const osPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = userPreference || osPreference;
  applyTheme(theme);

  themeToggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
});