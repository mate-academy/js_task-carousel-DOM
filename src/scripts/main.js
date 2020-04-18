'use strict';

const carouselItems = document.querySelectorAll('.carousel__item');
const carousel = document.querySelector('.carousel');
const dots = document.getElementsByClassName('carousel__dot');

const prev = document.querySelector('.carousel__btn_prev');
const next = document.querySelector('.carousel__btn_next');
let position = 0;
const width = 315;
const maxLength = width * carouselItems.length;
let activeDot = 0;

prev.addEventListener('click', prevPost);
next.addEventListener('click', nextPost);

function prevPost() {
  if (position === 0) {
    position = -maxLength + width;
    carousel.style.transform = `translateX(${position}px)`;
  } else {
    position += width;
    carousel.style.transform = `translateX(${position}px)`;
  }

  if (activeDot === 0) {
    dots.item(activeDot).classList.remove('carousel__dot_active');
    activeDot = dots.length - 1;
    dots.item(activeDot).classList.add('carousel__dot_active');
  } else {
    dots.item(activeDot).classList.remove('carousel__dot_active');
    activeDot--;
    dots.item(activeDot).classList.add('carousel__dot_active');
  }
}

function nextPost() {
  if (position <= -maxLength + width) {
    position = 0;
    carousel.style.transform = `translateX(0px)`;
  } else {
    position -= width;
    carousel.style.transform = `translateX(${position}px)`;
  }

  if (activeDot === 3) {
    dots.item(activeDot).classList.remove('carousel__dot_active');
    activeDot = 0;
    dots.item(activeDot).classList.add('carousel__dot_active');
  } else {
    dots.item(activeDot).classList.remove('carousel__dot_active');
    activeDot++;
    dots.item(activeDot).classList.add('carousel__dot_active');
  }
}
