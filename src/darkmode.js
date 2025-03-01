// themeToggle.js
export function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const toggleDarkIcon = document.getElementById('toggle-dark-icon');
    const toggleLightIcon = document.getElementById('toggle-light-icon');

    if (!themeToggle || !toggleDarkIcon || !toggleLightIcon) return;

    // Aplicar tema almacenado o preferencia del sistema
    const applySavedTheme = () => {
        if (localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            toggleLightIcon.classList.remove('hidden');
            toggleDarkIcon.classList.add('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            toggleDarkIcon.classList.remove('hidden');
            toggleLightIcon.classList.add('hidden');
        }
    };

    // Handler del click
    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        toggleDarkIcon.classList.toggle('hidden');
        toggleLightIcon.classList.toggle('hidden');

        localStorage.setItem('color-theme',
            document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    };

    // Inicializar
    applySavedTheme();

    // Agregar event listener
    themeToggle.addEventListener('click', toggleTheme);
}