'use strict';

const carousel = document.querySelector('.carousel');
const carouselItems = carousel.children;
const nextBtn = document.querySelector('.carousel__btn_next');
const prevBtn = document.querySelector('.carousel__btn_prev');
const width = parseFloat(getComputedStyle(carouselItems[0]).width);
const dots = [...document.querySelector('.carousel__dots-wrap').children];

let dotCounter = 0;

function dotsChanger(index) {
  const className = 'carousel__dot_active';

  dots.forEach(dot => dot.classList.remove(className));
  dots[index].classList.add(className);
}

function move(side) {
  const margin = parseFloat(getComputedStyle(carouselItems[0]).marginLeft);
  let moveSlide;

  side === 'next'
    ? moveSlide = `${margin - width}px`
    : moveSlide = `${margin + width}px`;

  if (margin % width === 0) {
    if (dotCounter >= dots.length - 1
      && event.target.className.includes('carousel__btn_next')) {
      dotCounter = 0;
      carouselItems[0].style.marginLeft = `${dotCounter * -width}px`;
    } else if (dotCounter <= 0
      && event.target.className.includes('carousel__btn_prev')) {
      dotCounter = dots.length - 1;
      carouselItems[0].style.marginLeft = `${dotCounter * -width}px`;
    } else {
      carouselItems[0].style.marginLeft = moveSlide;

      side === 'next'
        ? dotCounter = dotCounter + 1
        : dotCounter = dotCounter - 1;
    }
  }
}

nextBtn.addEventListener('click', () => {
  move('next');
  dotsChanger(dotCounter);
});

prevBtn.addEventListener('click', () => {
  move('prev');

  dotsChanger(dotCounter);
});
