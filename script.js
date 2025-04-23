let lightMode = localStorage.getItem('light-mode');
const themeToggle = document.getElementById('toggle-theme');

const enableLightMode = () => {
  document.body.classList.add('light-mode');
  localStorage.setItem('light-mode', 'active');
}

const disableLightMode = () => {
  document.body.classList.remove('light-mode');
  localStorage.setItem('light-mode', null);
}

if (lightMode === 'active') {
  enableLightMode();
}

themeToggle.addEventListener('click', () => {
  lightMode = localStorage.getItem('light-mode');
  lightMode !== 'active' ? enableLightMode() : disableLightMode();
});
