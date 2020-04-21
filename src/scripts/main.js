'use strict';

initCarousel();

function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const container = carousel.querySelector('.carousel__container');
  const containerWidth = container.offsetWidth;
  const carouselList = carousel.querySelector('.carousel__list');
  const items = carousel.querySelectorAll('.carousel__item');
  const dots = carousel.querySelectorAll('.carousel__dot');
  let currentItem = 0;

  carousel.addEventListener('click', (e) => {
    const { target } = e;

    handleSlideChange(target);
  });

  function handleSlideChange(target) {
    if (target.closest('.carousel__btn_prev')) {
      currentItem = (currentItem - 1) % items.length;
      currentItem = (currentItem < 0) ? items.length - 1 : currentItem;
    }

    if (target.closest('.carousel__btn_next')) {
      currentItem = (currentItem + 1) % items.length;
    }

    if (target.closest('.carousel__dots_wrap')) {
      dots.forEach((item, i) => {
        if (target === item) {
          currentItem = i;
        }
      });
    }

    handleSlideShift(currentItem);
  }

  function handleSlideShift(index) {
    const shift = index * containerWidth;

    carouselList.style.transform = `translateX(-${shift}px)`;
    dots.forEach(item => item.classList.remove('carousel__dot-active'));
    dots[index].classList.add('carousel__dot-active');
  }
}
