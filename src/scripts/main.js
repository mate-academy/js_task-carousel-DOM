'use strict';

const carousel = document.querySelector('.carousel');
const carouselItem = document.querySelectorAll('.carousel__item');
//  buttons
const prevBtn = document.querySelector('.carousel__btn_prev');
const nextBtn = document.querySelector('.carousel__btn_next');
// counter
let counter = 0;
const size = carouselItem[0].clientWidth;
// buttonsListener

nextBtn.addEventListener('click', () => {
  carousel.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  carousel.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carousel.addEventListener('transitionend', () => {
  if (counter === carouselItem.length) {
    carousel.style.transition = 'none';
    counter = 0;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if (counter < 0) {
    carousel.style.transition = 'none';
    counter = carouselItem.length - 1;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
