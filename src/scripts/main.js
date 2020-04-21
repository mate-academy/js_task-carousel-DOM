'use strict';
const prevButton = document.querySelector('.carousel__btn_prev');
const nextButton = document.querySelector('.carousel__btn_next');
const carousel = document.querySelector('.carousel');
const dots = document.querySelector('.carousel__dots-wrap');

let count = 1;
let position = 0;
const itemWidth = 310;
const itemsNumber = 4;

nextButton.addEventListener('click', () => {
  if (count >= itemsNumber) {
    count = 1;
    position = 0;
    carousel.style.left = `${position}px`;

    dots.children[itemsNumber - 1].classList.remove('carousel__dot_active');
    dots.children[count - 1].classList.add('carousel__dot_active');

    return;
  }

  if (count <= itemsNumber) {
    dots.children[count - 1].classList.remove('carousel__dot_active');
    dots.children[count].classList.add('carousel__dot_active');
  }

  count++;

  position -= itemWidth;
  carousel.style.left = `${position}px`;
});

prevButton.addEventListener('click', () => {
  if (count === 1) {
    count = itemsNumber;
    position = -(count - 1) * itemWidth;
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

  position += itemWidth;
  carousel.style.left = `${position}px`;
});

