// Theme Switch

// Access toggle button HTML element

const mainContent = document.querySelector('#body');
const themeChange = document.querySelector('.theme-toggle-btn');

// Set default theme to light
let theme = 'light';

// Listen for a click event on the theme toggle button
themeChange.addEventListener('click', function () {
    // If theme is light, apply the dark background on click
    if (theme === 'light') {
        theme = 'dark';
        mainContent.setAttribute('class', 'dark');
    }
    // If the theme is dark, apply light background on click
    else {
        theme = 'light';
        mainContent.setAttribute('class', 'light');
    }
});