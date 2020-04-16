'use strict';

const btnLeft = document.querySelector('.carousel__btn_prev');
const btnRight = document.querySelector('.carousel__btn_next');
const ul = document.querySelector('.carousel');
const collectionLi = document.querySelectorAll('.carousel__item');
const dot = document.querySelectorAll('.carousel__dot');
const width = 310;
const gap = 10;
const step = width * (collectionLi.length - 1)
+ gap * (collectionLi.length - 1);
let position = 0;
let dotPosition = 0;

btnRight.addEventListener('click', function(e) {
  position = position - (width + gap);

  if (position === -step - (width + gap)) {
    position = 0;
  }

  ul.style.transform = `translate(${position}px)`;

  if (dotPosition < collectionLi.length - 1) {
    dot[dotPosition + 1].classList.add('carousel__dot_active');
    dot[dotPosition].classList.remove('carousel__dot_active');
  }

  if (dotPosition === collectionLi.length - 1) {
    dot[dotPosition].classList.remove('carousel__dot_active');
    dotPosition = -1;
    dot[dotPosition + 1].classList.add('carousel__dot_active');
  }

  dotPosition++;
});

btnLeft.addEventListener('click', function(e) {
  if (position === 0) {
    position = -step - (width + gap);
  }

  position += width + gap;
  ul.style.transform = `translate(${position}px)`;

  if (dotPosition === 0) {
    dot[dotPosition].classList.remove('carousel__dot_active');
    dotPosition = collectionLi.length;
    dot[dotPosition - 1].classList.add('carousel__dot_active');
  }

  if (dotPosition > 0 && dotPosition < collectionLi.length) {
    dot[dotPosition].classList.remove('carousel__dot_active');
    dot[dotPosition - 1].classList.add('carousel__dot_active');
  }

  dotPosition--;
});
