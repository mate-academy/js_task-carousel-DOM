'use strict';

const sliderBG = document.querySelector('.carousel');
const btnLeft = document.querySelector('.carousel__btn_prev');
const btnRight = document.querySelector('.carousel__btn_next');

const slideSize = sliderBG.getBoundingClientRect().width;
const slideQuantity = [...sliderBG.children].length - 1;

function prev() {
  sliderBG.scrollBy(slideSize, 0);
  dot('+');

  if (sliderBG.scrollLeft >= (920)) {
    sliderBG.scrollTo(0, 0);
  }
}

function next() {
  sliderBG.scrollBy(-slideSize, 0);
  dot('-');

  if (sliderBG.scrollLeft <= 0) {
    sliderBG.scrollTo((slideSize * slideQuantity), 0);
  }
}

let count = 0;

function dot(side) {
  const dots = [...document.querySelector('.carousel__dots-wrap').children];
  const activeDot = 'carousel__dot carousel__dot_active';
  const notActiveDot = 'carousel__dot';

  if (side === '+') {
    count++;
  };

  if (side === '-') {
    count--;
  };

  if (count === 4) {
    count = 0;
  };

  if (count === -1) {
    count = 3;
  };

  if (dots[count + 1]) {
    dots[count + 1].className = notActiveDot;
  } else {
    dots[0].className = notActiveDot;
  };

  if (dots[count - 1]) {
    dots[count - 1].className = notActiveDot;
  } else {
    dots[3].className = notActiveDot;
  };

  dots[count].className = activeDot;
};

btnLeft.addEventListener('click', next);
btnRight.addEventListener('click', prev);
