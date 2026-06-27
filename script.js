document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  document.body.appendChild(themeToggle);

  const getPreferredTheme = () => {
    const userTheme = localStorage.getItem('theme');
    if (userTheme) {
      return userTheme;
    }
    const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-mode' : 'light-mode';
    return osTheme;
  };

  const applyTheme = (theme) => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'dark-mode' ? '🌙' : '☀️';
  };

  themeToggle.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
    applyTheme(newTheme);
  });

  applyTheme(getPreferredTheme());
});