document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    document.body.appendChild(themeToggle);

    const setThemeIcon = (isDark) => {
        themeToggle.textContent = isDark ? '🌙' : '☀️';
    };

    const applyTheme = (theme) => {
        document.body.className = theme;
        setThemeIcon(theme === 'dark-mode');
    };

    const saveThemePreference = (theme) => {
        if (window.localStorage) {
            localStorage.setItem('theme', theme);
        }
    };

    const loadTheme = () => {
        if (window.localStorage && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark-mode';
        }

        return 'light-mode';
    };

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.className;
        const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
        applyTheme(newTheme);
        saveThemePreference(newTheme);
    });

    const initialTheme = loadTheme();
    applyTheme(initialTheme);
});