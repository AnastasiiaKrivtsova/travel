const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const heroSlide = hero.querySelectorAll('.hero__slide');


const setMargin = () => {
  if (!header.classList.contains('header--is-open')) {
    hero.style.marginTop = `-${header.offsetHeight}px`;
    heroSlide.forEach((slide) => {
      slide.style.paddingTop = `${header.offsetHeight}px`;
    });
  }
};

const observeMutations = () => {
  const target = new MutationObserver(setMargin);

  target.observe(header, {
    childList: true,
    subtree: true,
  });
};

export const initHeroMargin = () => {
  if (!header.classList.contains('header--is-open')) {
    observeMutations();
    setMargin();
    window.addEventListener('resize', () => {
      setMargin();
    });
  }
};
