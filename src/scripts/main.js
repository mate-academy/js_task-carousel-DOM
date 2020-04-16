'use strict';

const nextBtn = document.querySelector('.carousel__btn_next');
const prevBtn = document.querySelector('.carousel__btn_prev');
const carousel = document.querySelector('.carousel');
const carouselDotsWrap = document.querySelector('.carousel__dots-wrap');
const cardWidth = 310;
const cardCount = 4;
let position = 0;
let count = 1;

nextBtn.addEventListener('click', () => {
  if (count % cardCount === 0) {
    count = 1;
    position = 0;
    carousel.style.left = `${position}px`;

    carouselDotsWrap.children[count + cardCount - 2]
      .classList.remove('carousel__dot_active');

    carouselDotsWrap.children[count - 1]
      .classList.add('carousel__dot_active');

    return;
  }

  count++;

  if (count <= cardCount) {
    carouselDotsWrap.children[count - 2]
      .classList.remove('carousel__dot_active');

    carouselDotsWrap.children[count - 1]
      .classList.add('carousel__dot_active');
  }

  position -= cardWidth;
  carousel.style.left = `${position}px`;
});

prevBtn.addEventListener('click', () => {
  if (count === 1) {
    count = 4;
    position = -cardWidth * (cardCount - 1);
    carousel.style.left = `${position}px`;

    carouselDotsWrap.children[count - cardCount]
      .classList.remove('carousel__dot_active');

    carouselDotsWrap.children[count - 1]
      .classList.add('carousel__dot_active');

    return;
  }

  count--;

  if (count >= 1) {
    carouselDotsWrap.children[count]
      .classList.remove('carousel__dot_active');

    carouselDotsWrap.children[count - 1]
      .classList.add('carousel__dot_active');
  }

  position += cardWidth;
  carousel.style.left = `${position}px`;
});
