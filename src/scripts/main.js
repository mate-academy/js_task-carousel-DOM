'use strict';

const carousel = document.querySelector('.carousel__wrapper');
const btnPrev = document.querySelector('.carousel__btn_prev');
const btnNext = document.querySelector('.carousel__btn_next');
const dots = document.querySelectorAll('.carousel__dot');
let count = 0;

function movePrevDot() {
  if (count > 0) {
    count--;
    dots[count].classList.add('carousel__dot_active');
    dots[count + 1].classList.remove('carousel__dot_active');
  }
}

function moveNextDot() {
  if (count < dots.length - 1) {
    count++;
    dots[count].classList.add('carousel__dot_active');
    dots[count - 1].classList.remove('carousel__dot_active');
  }
}

function moveCarousel(width) {
  return function() {
    carousel.scrollLeft += width;
  };
}

btnPrev.addEventListener('click', moveCarousel(-330));
btnNext.addEventListener('click', moveCarousel(330));
btnPrev.addEventListener('click', movePrevDot);
btnNext.addEventListener('click', moveNextDot);
