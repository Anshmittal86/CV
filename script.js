const darkModeToggle = document.getElementById('dark-mode-toggle');

// Load the preferred theme at startup
window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
};

// Toggle dark mode
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
  // Save the current mode to localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
};

darkModeToggle.addEventListener('click', toggleDarkMode);