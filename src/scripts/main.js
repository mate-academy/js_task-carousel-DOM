'use strict';

const prevButton = document.querySelector('.carousel__btn_prev');
const nextButton = document.querySelector('.carousel__btn_next');
const firstItem = document.querySelector('.carousel__item_first');
const dots = document.querySelectorAll('.carousel__dot');
let position = -20;
const width = 350;
let counter = 0;
const itemsLength = 5;

prevButton.addEventListener('click', () => {
  if (counter < 1) {
    return;
  }
  position -= width;
  firstItem.style.marginLeft = -position + 'px';
  counter--;
  dotClassName();
});

nextButton.addEventListener('click', () => {
  if (counter > itemsLength - 2) {
    return;
  }
  position += width;
  firstItem.style.marginLeft = -position + 'px';
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
