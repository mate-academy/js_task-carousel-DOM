'use strict';

const prevBtn = document.querySelector('.carousel__btn_prev');
const nextBtn = document.querySelector('.carousel__btn_next');
const carouselList = document.querySelector('.carousel__list');
const itemCarousel = document.querySelectorAll('.carousel__item');
const dotCarousel = document.querySelector('.carousel__dots-wrap').children;
const itemWidth = document.querySelector('.carousel__item').clientWidth;
let currentItem = 0;

function disableBtn() {
  switch (currentItem) {
    case 0:
      nextBtn.classList.remove('disable');
      prevBtn.classList.add('disable');
      break;
    case (itemCarousel.length - 1):
      nextBtn.classList.add('disable');
      prevBtn.classList.remove('disable');
      break;
    default:
      nextBtn.classList.remove('disable');
      prevBtn.classList.remove('disable');
  }
};

disableBtn(prevBtn);

prevBtn.addEventListener('click', (e) => {
  if (currentItem <= 0) {
    return;
  }
  currentItem--;
  disableBtn();
  handlePosition(currentItem);
});

nextBtn.addEventListener('click', () => {
  if (currentItem >= itemCarousel.length - 1) {
    return;
  }
  currentItem++;
  disableBtn();
  handlePosition(currentItem);
});

[...dotCarousel].map((el, i) => {
  el.addEventListener('click', () => {
    handlePosition(i);
    currentItem = i;
    disableBtn();
  });
});

function handlePosition(i) {
  carouselList.style.transform = `translateX(-${i * itemWidth}px)`;

  [...dotCarousel].forEach((el) => {
    el.classList.remove('carousel__dot_active');
  });
  dotCarousel[i].classList.add('carousel__dot_active');
}
