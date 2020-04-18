'use strict';

const btnPrev = document.querySelector('.carousel__btn_prev');
const btnNext = document.querySelector('.carousel__btn_next');
const carousel = document.querySelector('.carousel');
const carouselItem = document.querySelector('.carousel__item');
const dots = document.querySelectorAll('.carousel__dot');

const widthCarousel = carousel.scrollWidth;
const widthCard = carouselItem.clientWidth;

let count = 0;
let prevCount = 0;
let position = 0;

btnPrev.addEventListener('click', (e) => {
  const elementActive = e.target.closest('.carousel__btn_prev');

  if (!elementActive) {
    return;
  }

  if (position === 0) {
    position = -widthCarousel;
    count = dots.length - 1;
  }

  if (count < 0) {
    count = dots.length - 1;
  }

  position += widthCard;

  carousel.style.transform = `translate(${position}px)`;
  dots[prevCount].classList.remove('carousel__dot_active');
  dots[count].classList.add('carousel__dot_active');
  prevCount = count;
  count--;
});

btnNext.addEventListener('click', (e) => {
  const elementActive = e.target.closest('.carousel__btn_next');

  if (!elementActive) {
    return;
  }

  position -= widthCard;

  if (-position > widthCarousel - widthCard) {
    position = 0;
    count = 0;
  }

  carousel.style.transform = `translate(${position}px)`;
  dots[prevCount].classList.remove('carousel__dot_active');
  dots[count].classList.add('carousel__dot_active');
  prevCount = count;
  count++;
});
