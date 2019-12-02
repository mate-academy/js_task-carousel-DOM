'use strict';

const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.carousel__item');
const nextButton = document.querySelector('.carousel__btn_next');
const previousButton = document.querySelector('.carousel__btn_prev');

let dot = document.querySelector(' .carousel__dot');
let position = 0;

previousButton.addEventListener('click', displayPreviousCard);
nextButton.addEventListener('click', displayNextCard);

function displayPreviousCard() {
  if (position >= 0) {
    return;
  }

  position += 345;

  carousel.style.transform = `translateX(${position}px)`;

  if (!dot.previousElementSibling) {
    dot = document.querySelector('.carousel__dots-wrap .carousel__dot');
  }

  dot.className = 'carousel__dot';
  dot = dot.previousElementSibling;
  dot.classList.add('carousel__dot_active');
}

function displayNextCard() {
  if (position <= -((cards.length - 1) * 345)) {
    return;
  }

  position -= 345;

  carousel.style.transform = `translateX(${position}px)`;

  if (!dot.nextElementSibling) {
    return;
  }

  dot.className = 'carousel__dot';
  dot = dot.nextElementSibling;
  dot.classList.add('carousel__dot_active');
}
