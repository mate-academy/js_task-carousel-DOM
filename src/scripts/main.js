'use strict';

const carousel = document.querySelector('.carousel');
const carouselItems = carousel.children;
const nextBtn = document.querySelector('.carousel__btn_next');
const prevBtn = document.querySelector('.carousel__btn_prev');
const gap = parseFloat(getComputedStyle(carouselItems[0]).width);
const dots = [...document.querySelector('.carousel__dots-wrap').children];

let dotCounter = 0;

function dotsChanger(index) {
  const className = 'carousel__dot_active';

  dots.forEach(dot => dot.classList.remove(className));
  dots[index].classList.add(className);
}

nextBtn.addEventListener('click', () => {
  const margin = parseFloat(getComputedStyle(carouselItems[0]).marginLeft);

  if (margin % gap === 0) {
    if (dotCounter >= 3) {
      carouselItems[0].style.marginLeft = '0px';
      dotCounter = 0;
    } else {
      carouselItems[0].style.marginLeft = `${margin - gap}px`;
      dotCounter = dotCounter + 1;
    }
  }

  dotsChanger(dotCounter);
});

prevBtn.addEventListener('click', () => {
  const margin = parseFloat(getComputedStyle(carouselItems[0]).marginLeft);

  if (margin % gap === 0) {
    if (dotCounter <= 0) {
      dotCounter = 3;

      carouselItems[0].style.marginLeft
      = `${dotCounter * -gap}px`;
    } else {
      carouselItems[0].style.marginLeft = `${margin + gap}px`;
      dotCounter = dotCounter - 1;
    }
  }

  dotsChanger(dotCounter);
});
