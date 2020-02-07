'use strict';

const arrPrev = document.querySelector('.carousel__btn_prev');
const arrNext = document.querySelector('.carousel__btn_next');
const cards = document.querySelectorAll('.carousel__item');

const carouselCards = document.querySelector('.carousel');
let dotActive = null;

let position = 0;

arrPrev.addEventListener('click', e => {
  if (position < 0) {
    position += 340;
    carouselCards.style.transform = `translateX(${position}px)`;

    dotActive = document.querySelector('.carousel__dot_active');
    dotActive.previousElementSibling.classList.add('carousel__dot_active');
    dotActive.classList.remove('carousel__dot_active');
  }
});

arrNext.addEventListener('click', e => {
  if (position > -((cards.length - 1) * 340)) {
    position += -340;
    carouselCards.style.transform = `translateX(${position}px)`;

    dotActive = document.querySelector('.carousel__dot_active');
    dotActive.nextElementSibling.classList.add('carousel__dot_active');
    dotActive.classList.remove('carousel__dot_active');
  }
});
