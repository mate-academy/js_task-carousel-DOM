'use strict';

const btnPrev = document.querySelector('.carousel__btn_prev');
const btnNext = document.querySelector('.carousel__btn_next');

const items = document.querySelectorAll('.carousel__item');
const itemWidth = 350;

const carousel = document.querySelector('.carousel');
const carouselWidth = itemWidth * items.length;
const dots = document.querySelectorAll('.carousel__dot');

let position = 0;
let currentItem = 0;

btnNext.addEventListener('click', toNextItem);
btnPrev.addEventListener('click', toPreviousItem);

function toNextItem() {
  position -= itemWidth;

  if (Math.abs(position) >= carouselWidth) {
    position = 0;
    currentItem = -1;
  }
  carousel.style.transform = `translateX(${position}px)`;
  currentItem++;

  moveThatDot();
}

function toPreviousItem() {
  position += itemWidth;

  if (position > 0) {
    position = 0;
    currentItem = dots.length / dots.length;
  }
  carousel.style.transform = `translateX(${position}px)`;
  currentItem--;

  moveThatDot();
}

function moveThatDot() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('carousel__dot_active');
  }

  dots[currentItem].classList.add('carousel__dot_active');
}
