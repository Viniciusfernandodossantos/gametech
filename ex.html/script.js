document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
  
    menuBtn.addEventListener('click', function () {
      sideMenu.classList.toggle('open');
    });
  });
  