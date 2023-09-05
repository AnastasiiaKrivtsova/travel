import {ScrollLock} from '../utils/scroll-lock';
const navMain = document.querySelector('.header-nav');
const navToggle = document.querySelector('.header-nav__toggle');
const header = document.querySelector('.header');
const listItems = document.querySelectorAll('.header-nav__item');
window.scrollLock = new ScrollLock();

navMain.classList.remove('header-nav--nojs');

const initMobileMenu = () => {
  if (document.body.contains(document.querySelector('.header'))) {
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('header-nav--closed')) {
        navMain.classList.remove('header-nav--closed');
        navMain.classList.add('header-nav--is-open');
        window.scrollLock.disableScrolling();
      } else {
        navMain.classList.add('header-nav--closed');
        navMain.classList.remove('header-nav--is-open');
        window.scrollLock.enableScrolling();
      }
    });
  }
};

document.addEventListener('click', (evt) => {
  const click = evt.composedPath().includes(header);
  if (!click) {
    if (navMain.classList.contains('header-nav--is-open')) {
      navMain.classList.add('header-nav--closed');
      navMain.classList.remove('header-nav--is-open');
      window.scrollLock.enableScrolling();
    }
  }
});

listItems.forEach((listItem) => listItem.addEventListener('click', (evt) => {
  if (evt) {
    if (navMain.classList.contains('header-nav--is-open')) {
      navMain.classList.add('header-nav--closed');
      navMain.classList.remove('header-nav--is-open');
      window.scrollLock.enableScrolling();
    }
  }
}));

export {initMobileMenu};
