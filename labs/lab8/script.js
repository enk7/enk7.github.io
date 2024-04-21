function toggleTheme() {
    document.querySelector('body').classList.toggle('dark-mode');
}

const darkModeButton = document.getElementById('toggleButton');
darkModeButton.onclick = toggleTheme;