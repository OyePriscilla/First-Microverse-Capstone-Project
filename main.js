const closeMenu = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.hamburger');

closeMenu.addEventListener('click', () => {
  overlay.style.display = 'none';
});

menu.addEventListener('click', () => {
  overlay.style.display = 'block';
});