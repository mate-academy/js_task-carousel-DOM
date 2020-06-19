'use strict';

const btnNext = document.querySelector('.carousel__btn_next');
const btnPrev = document.querySelector('.carousel__btn_prev');
const list = document.querySelector('.carousel');
const dots = document.querySelectorAll('.carousel__dot');
const quantityItems = list.childElementCount - 1;

const width = list.firstElementChild.offsetWidth;

list.style.width = `${width}px`;

let counter = 0;
let previous = counter;

btnNext.addEventListener('click', function(e) {
  countNext();

  slideShow();
});

btnPrev.addEventListener('click', function(e) {
  countPrev();

  slideShow();
});

function countPrev() {
  counter = (counter <= 0)
    ? quantityItems
    : (counter - 1);
}

function countNext() {
  counter = (counter >= quantityItems)
    ? 0
    : (counter + 1);
}

function slideShow() {
  dots.item(previous).classList.toggle('carousel__dot_active');
  dots.item(counter).classList.toggle('carousel__dot_active');

  list.style.transform = `translateX(-${(counter) * width}px)`;
  previous = counter;
}
