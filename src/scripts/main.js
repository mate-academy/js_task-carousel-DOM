'use strict';

const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.carousel__item');
const buttonNext = document.querySelector('.carousel__btn_next');
const buttonPrev = document.querySelector('.carousel__btn_prev');

let dot = document.querySelector(' .carousel__dot');
let position = 0;

buttonPrev.addEventListener('click', displayPreviousCard);
buttonNext.addEventListener('click', displayNextCard);

function displayPreviousCard() {
  if (position >= 0) {
    return;
  }

  position += 350;

  carousel.style.transform = `translateX(${position}px)`;

  if (!dot.previousElementSibling) {
    dot = document.querySelector('.carousel__dots-wrap .carousel__dot');
  }

  dot.className = 'carousel__dot';
  dot = dot.previousElementSibling;
  dot.classList.add('carousel__dot_active');
}

function displayNextCard() {
  if (position <= -((cards.length - 1) * 350)) {
    return;
  }

  position -= 350;

  carousel.style.transform = `translateX(${position}px)`;

  if (!dot.nextElementSibling) {
    return;
  }

  dot.className = 'carousel__dot';
  dot = dot.nextElementSibling;
  dot.classList.add('carousel__dot_active');
}
