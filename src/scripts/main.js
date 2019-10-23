'use strict';

const nextBtn = document.querySelector('.carousel__btn_next');
const prevBtn = document.querySelector('.carousel__btn_prev');
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.carousel__item');
let dot = document.querySelector(' .carousel__dot');

let position = 0;

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);

function showNextSlide() {
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

function showPrevSlide() {
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
