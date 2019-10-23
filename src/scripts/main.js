'use strict';

let position = 0;
const width = 340;

const listElems = document.querySelectorAll('.carousel__item');
const carouselDot = document.querySelectorAll('.carousel__dot');
const list = document.querySelector('ul');
list.style.transition = 'margin' + ' .3s';

const btnPrev = document.querySelector('.carousel__btn_prev');
btnPrev.addEventListener('click', () => {
  carouselDot[position / width].className = 'carousel__dot';
  position -= width;
  position = Math.max(position, 0);
  carouselDot[position / width].className
   = 'carousel__dot carousel__dot_active';
  list.style.marginLeft = -position + 'px';
});

const btnNext = document.querySelector('.carousel__btn_next');
btnNext.addEventListener('click', () => {
  carouselDot[position / width].className = 'carousel__dot';
  position += width;
  position = Math.min(position, (listElems.length - 1) * width);
  carouselDot[position / width].className
   = 'carousel__dot carousel__dot_active';
  list.style.marginLeft = -position + 'px';
});
