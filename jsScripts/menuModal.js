const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.main-nav-list');
const menuOpts = document.querySelectorAll('.main-nav-item');
const body = document.querySelector('body');

function openMenu() {
  body.classList.add('active');
  menu.classList.add('show-menu-modal');
}

function closeMenu() {
  menu.classList.remove('show-menu-modal');
  body.classList.remove('active');
}

menuBtn.addEventListener('click', openMenu);
menuOpts.forEach((menuOpt) => menuOpt.addEventListener('click', closeMenu));