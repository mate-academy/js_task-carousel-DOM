'use strict';

const buttonPrev = document.querySelector('.carousel__btn_prev');
const buttonNext = document.querySelector('.carousel__btn_next');
const carouselItems = document.querySelectorAll('.carousel__item');
const carousel = document.querySelector('.carousel__wrapper');
const dots = document.querySelectorAll('.carousel__dot');
const carouselItemsWidth = carouselItems[0].clientWidth;
const carouselLength = carousel.scrollWidth - carouselItemsWidth;
let currentPosition = 0;
let dotIndex = 0;

function slideToNext() {
  if (currentPosition > -carouselLength) {
    currentPosition -= carouselItemsWidth;
  }

  carouselItems[0].style.marginLeft = `${currentPosition}px`;
  dotsIndex();
  dots[dotIndex].classList.add('carousel__dot_active');
  dots[dotIndex - 1].classList.remove('carousel__dot_active');
};

function slideToPrev() {
  if (currentPosition < 0) {
    currentPosition += carouselItemsWidth;
  }

  carouselItems[0].style.marginLeft = `${currentPosition}px`;
  dotsIndex();
  dots[dotIndex].classList.add('carousel__dot_active');
  dots[dotIndex + 1].classList.remove('carousel__dot_active');
};

function dotsIndex() {
  dotIndex = (currentPosition / carouselItemsWidth) * -1;

  return dotIndex;
};

buttonNext.addEventListener('click', slideToNext);
buttonPrev.addEventListener('click', slideToPrev);
