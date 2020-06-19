'use strict';

const sliderBG = document.querySelector('.carousel');
const btnLeft = document.querySelector('.carousel__btn_prev');
const btnRight = document.querySelector('.carousel__btn_next');

let dotCount = 0;

function prev() {
  sliderBG.scrollBy(320, 0);

  dotCount++;

  if (dotCount === 4) {
    dotCount = 0;
  };

  dot();

  if (sliderBG.scrollLeft >= (920)) {
    sliderBG.scrollTo(0, 0);
  }
}

function next() {
  sliderBG.scrollBy(-320, 0);

  dotCount--;

  if (dotCount === -1) {
    dotCount = 3;
  };

  dot();

  if (sliderBG.scrollLeft <= 0) {
    sliderBG.scrollTo((320 * 3), 0);
  }
}

function dot() {
  const dots = [...document.querySelector('.carousel__dots-wrap').children];
  const activeDot = 'carousel__dot carousel__dot_active';
  const notActiveDot = 'carousel__dot';

  if (dots[dotCount + 1]) {
    dots[dotCount + 1].className = notActiveDot;
  } else {
    dots[0].className = notActiveDot;
  };

  if (dots[dotCount - 1]) {
    dots[dotCount - 1].className = notActiveDot;
  } else {
    dots[3].className = notActiveDot;
  };

  dots[dotCount].className = activeDot;
};

btnLeft.addEventListener('click', next);
btnRight.addEventListener('click', prev);
