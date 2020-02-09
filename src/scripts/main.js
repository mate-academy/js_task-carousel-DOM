'use strict';

const carousel = document.querySelector('.carousel');
const carouselItem = document.querySelectorAll('.carousel__item');
// const dotActive = document.querySelectorAll('.carousel__dot');
//  buttons
const prevBtn = document.querySelector('.carousel__btn_prev');
const nextBtn = document.querySelector('.carousel__btn_next');
// counter
let counter = 1;
const size = carouselItem[0].clientWidth;

carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
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
  if (carouselItem[counter].id === 'lastClone') {
    carousel.style.transition = 'none';
    counter = carouselItem.length - 2;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if (carouselItem[counter].id === 'firstClone') {
    carousel.style.transition = 'none';
    counter = carouselItem.length - counter;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
