'use strict';
const items = document.querySelectorAll('.carousel__item');
let position = -20;
const prev = document.querySelector('.carousel__btn_prev');
const next = document.querySelector('.carousel__btn_next');
const dots = document.querySelectorAll('.carousel__dot');
const WIDTH = 350;
let itemsCount = 0;

next.onclick = () => {
  if (itemsCount > 2) {
    return;
  }
  position = position + WIDTH;
  items[0].style.marginLeft = -position + 'px';
  itemsCount++;
  for (let i = 0; i < dots.length; i++) {
    if (i === itemsCount) {
      dots[i].className = 'carousel__dot carousel__dot_active';
    } else {
      dots[i].className = 'carousel__dot';
    }
  }
};

prev.onclick = () => {
  if (itemsCount < 1) {
    return;
  }
  position = position - WIDTH;
  items[0].style.marginLeft = -position + 'px';
  itemsCount--;
  for (let i = 0; i < dots.length; i++) {
    if (i === itemsCount) {
      dots[i].className = 'carousel__dot carousel__dot_active';
    } else {
      dots[i].className = 'carousel__dot';
    }
  }
};
