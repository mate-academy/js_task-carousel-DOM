'use strict';

const leftBtn = document.querySelector('.carousel__btn_next');
const rightBtn = document.querySelector('.carousel__btn_prev');
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.carousel__item');
let dot = document.querySelector(' .carousel__dot');
let position = 0;

rightBtn.addEventListener('click', rightSlide);
leftBtn.addEventListener('click', leftSlide);

function leftSlide() {
  if (position <= -((cards.length - 1) * 400)) {
    return;
  }

  position -= 400;
  carousel.style.transform = `translateX(${position}px)`;

  if (!dot.nextElementSibling) {
    return;
  }

  dot.className = 'carousel__dot';
  dot = dot.nextElementSibling;
  dot.classList.add('carousel__dot_active');
}

function rightSlide() {
  if (position >= 0) {
    return;
  }

  position += 400;
  carousel.style.transform = `translateX(${position}px)`;

  if (!dot.previousElementSibling) {
    dot = document.querySelector('.carousel__dot');
  }

  dot.className = 'carousel__dot';
  dot = dot.previousElementSibling;
  dot.classList.add('carousel__dot_active');
}
