'use strict';

const btnNext = document.querySelector('.carousel__btn_next');
const btnPrev = document.querySelector('.carousel__btn_prev');
const list = document.querySelector('.carousel');
const quantityItems = list.childElementCount - 1;

const li = document.querySelector('li');
const width = li.offsetWidth;

list.style.width = `${width}px`;

let counter = 0;

btnNext.addEventListener('click', function(e) {
  counter = (counter >= quantityItems) ? 0 : counter + 1;
  list.style.transform = `translateX(-${counter * width}px)`;
});

btnPrev.addEventListener('click', function(e) {
  counter = (counter <= 0) ? (quantityItems) : counter - 1;
  list.style.transform = `translateX(-${(counter) * width}px)`;
});
