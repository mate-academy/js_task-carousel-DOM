'use strict';

const buttonPrev = document.querySelector('.carousel__btn_prev');
const buttonNext = document.querySelector('.carousel__btn_next');
const carouselItems = document.querySelectorAll('.carousel__item');
const dots = document.querySelectorAll('.carousel__dot');
const carouselItemsWidth = carouselItems[0].clientWidth + 1;
let currentPosition = 0;
let counter = 0;

function slideToNext() {
  if (counter > carouselItems.length - 2) {
    return;
  }

  counter += 1;
  carouselSwitcher(counter);
  dots[counter - 1].classList.remove('carousel__dot_active');
};

function slideToPrev() {
  if (counter <= 0) {
    return;
  }

  counter -= 1;
  carouselSwitcher(counter);
  dots[counter + 1].classList.remove('carousel__dot_active');
};

function carouselSwitcher(itemIndex) {
  currentPosition = (carouselItemsWidth - 1) * -itemIndex;
  carouselItems[0].style.marginLeft = `${currentPosition}px`;
  dots[itemIndex].classList.add('carousel__dot_active');
};

buttonNext.addEventListener('click', slideToNext);
buttonPrev.addEventListener('click', slideToPrev);
