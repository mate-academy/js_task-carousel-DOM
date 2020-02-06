'use strict';

const btnPrev = document.querySelector('.carousel__btn_prev');
const btnNext = document.querySelector('.carousel__btn_next');
const images = document.querySelectorAll('.carousel__item');
const dots = document.querySelectorAll('.carousel__dot');

const width = 325;
let position = 0;
let index;

btnPrev.addEventListener('click', () => {
  if (position !== 0) {
    position = position + width;
  }

  images[0].style.marginLeft = position + 'px';
  index = Math.abs(position / width);
  dots[index].classList.add('carousel__dot_active');
  dots[index + 1].classList.remove('carousel__dot_active');
});

btnNext.addEventListener('click', () => {
  if (position !== -width * (images.length - 1)) {
    position = position - width;
  }

  images[0].style.marginLeft = position + 'px';
  index = Math.abs(position / width);
  dots[index].classList.add('carousel__dot_active');
  dots[index - 1].classList.remove('carousel__dot_active');
});
