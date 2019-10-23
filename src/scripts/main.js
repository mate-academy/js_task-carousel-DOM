'use strict';

carousel();

function carousel() {
  const SLIDER_LENGTH = document.querySelectorAll('.carousel__item').length;
  const SLIDE_WIDTH = 350;

  const container = document.querySelector('.carousel__container');
  const dots = document.querySelectorAll('.carousel__dot');

  let translate = 0;
  let currentSlide = 0;

  const prevButton = document.querySelector('.carousel__btn_prev');
  prevButton.addEventListener('click', (evt) => {
    channgeSlide(1);
  });

  const nextButton = document.querySelector('.carousel__btn_next');
  nextButton.addEventListener('click', (evt) => {
    channgeSlide(-1);
  });

  const dotsWrap = document.querySelector('.carousel__dots-wrap');
  dotsWrap.addEventListener('click', (evt) => {
    const toSlide = evt.target.getAttribute('toSlide');
    let index = 0;

    if (+toSlide === 0) {
      index = -currentSlide;
    } else {
      index = currentSlide - toSlide;
    }

    channgeSlide(index);
  });

  const channgeSlide = function(index) {
    currentSlide -= index;

    if (currentSlide < 0) {
      currentSlide = SLIDER_LENGTH - 1;
    }

    if (currentSlide > SLIDER_LENGTH - 1) {
      currentSlide = 0;
    }

    translate = -currentSlide * SLIDE_WIDTH;
    container.style.transform = `translateX(${translate}px)`;
    changeDot(currentSlide);
  };

  const changeDot = function(index = 0) {
    for (const dot of dots) {
      dot.classList.remove('carousel__dot_active');
    }

    dots[index].classList.add('carousel__dot_active');
  };

  const dotLinks = function() {
    let counter = 0;

    for (const dot of dots) {
      dot.setAttribute('toSlide', counter++);
    }
  }; dotLinks();
}
