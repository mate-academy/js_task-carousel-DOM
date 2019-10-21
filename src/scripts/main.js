'use strict';
const prev = document.querySelector('.carousel__btn_prev');
const next = document.querySelector('.carousel__btn_next');

const items = document.querySelectorAll('.carousel__item');
const dots = document.querySelectorAll('.carousel__dot');

const ITEM_WIDTH = parseInt(window.getComputedStyle(items[0]).width)
  + parseInt(window.getComputedStyle(items[0]).marginLeft)
  + parseInt(window.getComputedStyle(items[0]).marginRight);

let activeItemIndex = 0;

next.addEventListener('click', () => {
  dots[activeItemIndex].classList.remove('carousel__dot_active');
  activeItemIndex = (activeItemIndex === (items.length - 1))
    ? 0
    : activeItemIndex + 1;
  dots[activeItemIndex].classList.add('carousel__dot_active');
  const margin = -activeItemIndex * ITEM_WIDTH;
  items[0].style.marginLeft = margin + 'px';
});

prev.addEventListener('click', () => {
  dots[activeItemIndex].classList.remove('carousel__dot_active');
  activeItemIndex = (activeItemIndex === 0)
    ? items.length - 1
    : activeItemIndex - 1;
  dots[activeItemIndex].classList.add('carousel__dot_active');
  const margin = -activeItemIndex * ITEM_WIDTH;
  items[0].style.marginLeft = margin + 'px';
});
