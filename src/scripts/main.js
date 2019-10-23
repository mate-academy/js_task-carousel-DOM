'use strict';

const nextBtn = document.querySelector('.carousel__btn_next');
const prevBtn = document.querySelector('.carousel__btn_prev');
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.carousel__item');
let dot = document.querySelector(' .carousel__dot');

let i = 0;

function showNextSlide() {
  if (i <= -((cards.length - 1) * 350)) {
    return;
  }

  i -= 350;

  carousel.style.transform = `translateX(${i}px)`;

  if (!dot.nextElementSibling) {
    return;
  } else {
    dot.className = 'carousel__dot';
    dot = dot.nextElementSibling;
  }

  dot.classList.add('carousel__dot_active');
}

nextBtn.addEventListener('click', showNextSlide);

function showPrevSlide() {
  if (i >= 0) {
    return;
  }

  i += 350;

  carousel.style.transform = `translateX(${i}px)`;

  if (!dot.previousElementSibling) {
    dot = document.querySelector('.carousel__dots-wrap .carousel__dot');
  } else {
    dot.className = 'carousel__dot';
    dot = dot.previousElementSibling;
  }

  dot.classList.add('carousel__dot_active');
}

prevBtn.addEventListener('click', showPrevSlide);
