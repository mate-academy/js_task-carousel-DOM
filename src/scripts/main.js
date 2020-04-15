'use strict';

const wrapper = document.querySelector('.wrapper');
const allItems = document.querySelectorAll('.carousel__item');
let counter = 0;
let counterArray = 1;
const step = 310;
const dots = document.querySelectorAll('.carousel__dot');
const activeClass = 'carousel__dot_active';

wrapper.addEventListener('click', e => {
  if (e.target.classList.contains('carousel__btn_prev')) {
    counterArray--;

    if (counterArray <= 0) {
      counterArray = allItems.length;
      counter = -(step * allItems.length);
    }

    counter += step;

    for (const item of dots) {
      item.classList.remove(activeClass);
    }

    dots[counterArray - 1].classList.add(activeClass);

    for (const item of allItems) {
      item.style = `transform: translateX(${counter}px);`;
    }
  } else if (e.target.classList.contains('carousel__btn_next')) {
    counter -= step;

    if (counterArray >= allItems.length) {
      counter = 0;
      counterArray = 0;
    }

    counterArray++;

    for (const item of dots) {
      item.classList.remove(activeClass);
    }

    dots[counterArray - 1].classList.add(activeClass);

    for (const item of allItems) {
      item.style = `transform: translateX(${counter}px);`;
    }
  }
});
