'use strict';

const btnPrev = document.querySelector('.carousel__btn_prev');
const btnNext = document.querySelector('.carousel__btn_next');
const carousel = document.querySelector('.carousel');
const carouselItem = document.querySelector('.carousel__item');
const dots = document.querySelectorAll('.carousel__dot');

const widthCarousel = carousel.scrollWidth;
const widthCard = carouselItem.clientWidth;

let dotPosition = 0;
// let prevCount = 0;
let position = 0;

btnPrev.addEventListener('click', (e) => {
  const elementActive = e.target.closest('.carousel__btn_prev');

  if (!elementActive) {
    return;
  }

  if (position === 0) {
    position = -widthCarousel;
  }

  position += widthCard;

  carousel.style.transform = `translate(${position}px)`;

  if (dotPosition === 0) {
    dots[dotPosition].classList.remove('carousel__dot_active');
    dotPosition = dots.length;
    dots[dotPosition - 1].classList.add('carousel__dot_active');
  }

  if (dotPosition > 0 && dotPosition < dots.length) {
    dots[dotPosition].classList.remove('carousel__dot_active');
    dots[dotPosition - 1].classList.add('carousel__dot_active');
  }

  dotPosition--;
});

btnNext.addEventListener('click', (e) => {
  const elementActive = e.target.closest('.carousel__btn_next');

  if (!elementActive) {
    return;
  }

  position -= widthCard;

  if (-position > widthCarousel - widthCard) {
    position = 0;
  }

  carousel.style.transform = `translate(${position}px)`;

  if (dotPosition < dots.length - 1) {
    dots[dotPosition + 1].classList.add('carousel__dot_active');
    dots[dotPosition].classList.remove('carousel__dot_active');
  }

  if (dotPosition === dots.length - 1) {
    dots[dotPosition].classList.remove('carousel__dot_active');
    dotPosition = -1;
    dots[dotPosition + 1].classList.add('carousel__dot_active');
  }

  dotPosition++;
});
