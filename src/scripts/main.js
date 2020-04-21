'use strict';

const prevButton = document.querySelector('.carousel__btn_prev');
const nextButton = document.querySelector('.carousel__btn_next');
const carousel = document.querySelector('.carousel');
const dots = document.querySelector('.carousel__dots-wrap');

const cardWidth = 310;
const cardCount = 4;
let count = 1;
let position = 0;

nextButton.addEventListener('click', () => {
  if (count >= cardCount) {
    count = 1;
    position = 0;
    carousel.style.left = `${position}px`;

    dots.children[cardCount - 1].classList.remove('carousel__dot_active');
    dots.children[count - 1].classList.add('carousel__dot_active');

    return;
  }

  if (count <= cardCount) {
    dots.children[count - 1].classList.remove('carousel__dot_active');
    dots.children[count].classList.add('carousel__dot_active');
  }

  count++;

  position -= cardWidth;
  carousel.style.left = `${position}px`;
});

prevButton.addEventListener('click', () => {
  if (count === 1) {
    count = cardCount;
    position = -(count - 1) * cardWidth;
    carousel.style.left = `${position}px`;

    dots.children[0].classList.remove('carousel__dot_active');
    dots.children[count - 1].classList.add('carousel__dot_active');

    return;
  }

  if (count >= 1) {
    dots.children[count - 2].classList.add('carousel__dot_active');
    dots.children[count - 1].classList.remove('carousel__dot_active');
  }

  count--;

  position += cardWidth;
  carousel.style.left = `${position}px`;
});
