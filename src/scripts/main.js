'use strict';

const card1 = document.querySelector('.carousel').firstElementChild;
const carouselLength = document.querySelector('.carousel').children.length;
const prev = document.querySelector('.carousel__btn_prev');
const next = document.querySelector('.carousel__btn_next');
const cardWidth = card1.offsetWidth
  + parseInt(getComputedStyle(card1).marginLeft)
  + parseInt(getComputedStyle(card1).marginRight);
const dots = document.querySelector('.carousel__dots-wrap');

let carouselState = 0;

next.addEventListener('click', (click) => {
  if (carouselState < carouselLength - 1) {
    dots.children[carouselState].classList.remove('carousel__dot_active');
    carouselState++;
    dots.children[carouselState].classList.add('carousel__dot_active');
  }
  card1.style.marginLeft = `${-carouselState * cardWidth}px`;
});

prev.addEventListener('click', (click) => {
  if (carouselState > 0) {
    dots.children[carouselState].classList.remove('carousel__dot_active');
    carouselState--;
    dots.children[carouselState].classList.add('carousel__dot_active');
  }
  card1.style.marginLeft = `${-carouselState * cardWidth}px`;
});
