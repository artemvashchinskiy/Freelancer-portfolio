const btnDarkMode = document.querySelector('.dark-mode-btn');

// 1. Check the dark theme on system settings level

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}

// 2. Check the dark mode in localStorage

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'Light') {
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
    document.body.classList.add('light');
}



// If is changing system settings, we change theme aswell

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        if (newColorScheme === 'dark') {
            btnDarkMode.classList.add('dark-mode-btn--active');
            document.body.classList.add('dark');
            localStorage.setItem("darkMode", "dark");
        } else {
            btnDarkMode.classList.remove('dark-mode-btn--active');
            document.body.classList.remove('dark');
            localStorage.setItem("darkMode", "light");
        }
    });

// Turn on the dark mode by button

btnDarkMode.onclick = function () {
    console.log('click');
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');
    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'Light');
    }
};

const clickosa = document.querySelector('.header__title');

clickosa.onclick = function () {
    console.log('clickosa');
};
