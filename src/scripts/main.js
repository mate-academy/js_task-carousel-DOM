'use strict';

const carousel = document.querySelector('.carousel');
const leftButton = document.querySelector('.carousel__btn_prev');
const rightButton = document.querySelector('.carousel__btn_next');
const dots = document.querySelectorAll('.carousel__dot');
const carouselItem = document.querySelectorAll('.carousel__item');
const mainSlideBlock = document.querySelector('.slide-pictures');

const itemMargin = window.getComputedStyle(carouselItem[0]).marginLeft;
const slideDistance = carouselItem[0].clientWidth
  + parseInt(itemMargin) * 2; // width of card + margins.

mainSlideBlock.style.width = slideDistance; /* controll width of
visible cards block. If someone change width of card,
this block will change too */

let slidePosition = 0; // it left position current card
let i = 0; // count of active dot

rightButton.addEventListener('click', () => {
  if (slidePosition === -(slideDistance * (carouselItem.length - 1))) { /* count
    quantity of cards */
    slidePosition = 0;
    carousel.style.left = `${slidePosition}`; /* if we stand on last card,
    we change carousel position to start */
  } else {
    slidePosition -= slideDistance;
    carousel.style.left = `${slidePosition}px`; /* else we change
    carousel pos to next card */
  };
  if (i === dots.length - 1) { /* we control quantity and
    active style  of dotes */
    dots[i].classList.remove('carousel__dot_active');
    i = 0;
    dots[i].classList.add('carousel__dot_active');
  } else {
    dots[i].classList.remove('carousel__dot_active');
    dots[++i].classList.add('carousel__dot_active');
  }
});
leftButton.addEventListener('click', () => {
  if (slidePosition === 0) {
    slidePosition = -(slideDistance * (carouselItem.length - 1));
  } else {
    slidePosition += slideDistance;
  }
  carousel.style.left = `${slidePosition}px`;
  if (i === 0) { // we control quantity and active style  of dotes.
    dots[i].classList.remove('carousel__dot_active');
    i = dots.length - 1;
    dots[i].classList.add('carousel__dot_active');
  } else {
    dots[i].classList.remove('carousel__dot_active');
    dots[--i].classList.add('carousel__dot_active');
  }
});
