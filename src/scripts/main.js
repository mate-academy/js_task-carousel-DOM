'use strict';

const prevBtn = document.querySelector('.carousel__btn_prev');
const nextBtn = document.querySelector('.carousel__btn_next');
const carouselList = document.querySelector('.carousel__list');
const itemCarousel = document.querySelectorAll('.carousel__item');
const dotCarousel = document.querySelector('.carousel__dots-wrap').children;
const itemWidth = document.querySelector('.carousel__item').clientWidth;
let currentItem = 0;

prevBtn.addEventListener('click', (e) => {
  if (currentItem <= 0) {
    currentItem = itemCarousel.length;
  }
  currentItem--;
  handlePosition(currentItem);
});

nextBtn.addEventListener('click', () => {
  if (currentItem >= itemCarousel.length - 1) {
    currentItem = -1;
  }
  currentItem++;
  handlePosition(currentItem);
});

[...dotCarousel].map((el, i) => {
  el.addEventListener('click', () => {
    handlePosition(i);
    currentItem = i;
  });
});

function handlePosition(i) {
  carouselList.style.transform = `translateX(-${i * itemWidth}px)`;

  [...dotCarousel].forEach((el) => {
    el.classList.remove('carousel__dot_active');
  });
  dotCarousel[i].classList.add('carousel__dot_active');
}
