'use strict';

const carouselNextButton = document.querySelector('.carousel__btn_next');
const carouselPrevButton = document.querySelector('.carousel__btn_prev');
const carouselList = document.querySelector('.carousel');
const carouselDots = document.querySelector('.carousel__dots-wrap');
let currentCard = 1;

carouselNextButton.addEventListener('click', (evt) => {
  if (currentCard < carouselList.children.length) {
    const dots = carouselDots.children;

    currentCard++;

    for (const item of carouselList.children) {
      item.style.transform = `translateX(-${320 * (currentCard - 1)}px)`;
    }

    dots[currentCard - 2].classList.remove('carousel__dot_active');
    dots[currentCard - 1].classList.add('carousel__dot_active');
  }
});

carouselPrevButton.addEventListener('click', (evt) => {
  if (currentCard > 1) {
    const dots = carouselDots.children;

    currentCard--;

    for (const item of carouselList.children) {
      item.style.transform = `translateX(-${320 * (currentCard - 1)}px)`;
    }

    dots[currentCard].classList.remove('carousel__dot_active');
    dots[currentCard - 1].classList.add('carousel__dot_active');
  }
});
