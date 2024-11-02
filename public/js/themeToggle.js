// themeToggle.js

// On page load or when changing themes
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Theme toggle functionality
function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light'; // User chose light mode
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark'; // User chose dark mode
    }
}

// Whenever the user explicitly chooses to respect the OS preference
function resetTheme() {
    localStorage.removeItem('theme');
    location.reload(); // Reload the page to apply OS preference
}
