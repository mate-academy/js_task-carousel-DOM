'use strict';
const goBack = document.querySelector('.carousel__btn_prev');
const goForward = document.querySelector('.carousel__btn_next');
const item = document.querySelectorAll('.carousel__item');
const dot = document.querySelectorAll('.carousel__dot');
const elementWidth = parseInt(window.getComputedStyle(item[0]).width)
  + parseInt(window.getComputedStyle(item[0]).marginLeft)
  + parseInt(window.getComputedStyle(item[0]).marginRight);
let itemIndex = 0;

goForward.addEventListener('click', () => {
  dot[itemIndex].classList.remove('carousel__dot_active');
  itemIndex = (itemIndex === (item.length - 1)) ? 0 : itemIndex + 1;
  dot[itemIndex].classList.add('carousel__dot_active');
  const margin = -itemIndex * elementWidth;
  item[0].style.marginLeft = margin + 'px';
});

goBack.addEventListener('click', () => {
  dot[itemIndex].classList.remove('carousel__dot_active');
  itemIndex = (itemIndex === 0) ? item.length - 1 : itemIndex - 1;
  dot[itemIndex].classList.add('carousel__dot_active');
  const margin = -itemIndex * elementWidth;
  item[0].style.marginLeft = margin + 'px';
});
