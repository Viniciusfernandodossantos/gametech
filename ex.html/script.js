
const menuBtn = document.querySelector('[aria-label="Menu"]');
const submenu = document.getElementById('submenu');

menuBtn.addEventListener('click', () => {
  submenu.classList.toggle('hidden');
});

// Fecha submenu se clicar fora
window.addEventListener('click', (e) => {
  if (!submenu.contains(e.target) && !menuBtn.contains(e.target)) {
    submenu.classList.add('hidden');
  }
});

