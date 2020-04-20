'use strict';

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel__btn_prev');
const nextButton = document.querySelector('.carousel__btn_next');
const countItems = document.querySelectorAll('.carousel__item').length;
const dot = [...document.querySelectorAll('.carousel__dot')];
let dotIndex = 0;
const mainLength = 330;
let transformLength = 0;

prevButton.addEventListener('click', prevButtonClick);
nextButton.addEventListener('click', nextButtonClick);

function prevButtonClick(e) {
  if (transformLength === 0) {
    transformLength = -(countItems - 1) * mainLength;
    carousel.style = `transform: translateX(${transformLength}px);`;
    dotIndex = countItems - 1;

    dot[0].classList.remove('carousel__dot_active');
    dot[countItems - 1].classList.add('carousel__dot_active');
  } else {
    carousel.style = `transform:
    translateX(calc(${transformLength}px + ${mainLength}px));`;
    transformLength += mainLength;
    dotIndex--;
    dot[dotIndex].classList.add('carousel__dot_active');
    dot[dotIndex + 1].classList.remove('carousel__dot_active');
  }
}

function nextButtonClick(e) {
  if (transformLength < -(countItems * mainLength) / 2) {
    transformLength = 0;

    carousel.style = `transform:
      translateX(calc(${transformLength}px);`;
    dotIndex = 0;

    dot[countItems - 1].classList.remove('carousel__dot_active');
    dot[dotIndex].classList.add('carousel__dot_active');
  } else {
    carousel.style = `transform:
      translateX(calc(${transformLength}px - ${mainLength}px));`;
    transformLength -= mainLength;
    dotIndex++;
    dot[dotIndex].classList.add('carousel__dot_active');
    dot[dotIndex - 1].classList.remove('carousel__dot_active');
  }
}
