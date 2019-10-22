'use strict';

const prevButton = document.querySelector('.carousel__btn_prev');
const nextButton = document.querySelector('.carousel__btn_next');
const items = document.querySelectorAll('.carousel__item');
const dots = document.querySelectorAll('.carousel__dot');
let position = -20;
const width = 350;
let counter = 0;

prevButton.addEventListener('click', () => {
  if (counter < 1) {
    return;
  }
  position -= width;
  items[0].style.marginLeft = -position + 'px';
  counter--;
  dotClassName();
});

nextButton.addEventListener('click', () => {
  if (counter > 2) {
    return;
  }
  position += width;
  items[0].style.marginLeft = -position + 'px';
  counter++;
  dotClassName();
});

function dotClassName() {
  for (let i = 0; i < dots.length; i++) {
    if (i === counter) {
      dots[i].className = 'carousel__dot carousel__dot_active';
    } else {
      dots[i].className = 'carousel__dot';
    }
  }
}
