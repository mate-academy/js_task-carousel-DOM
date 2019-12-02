'use strict';
document.addEventListener('DOMContentLoaded', ready);

function ready() {
  const btnPrev = document.querySelector('.carousel__btn_prev');
  const btnNext = document.querySelector('.carousel__btn_next');
  const carousel = document.querySelector('.carousel');
  const dots = document.querySelectorAll('.carousel__dot');

  dots[0].classList.add('carousel__dot_active');

  const slideWidth = 310;
  let stepSlidesMove = 0;
  let indexDots = 0;
  const amountSteps = 3;
  const maxWidthAllSlides = slideWidth * amountSteps;

  btnPrev.addEventListener('click', prevClick);
  btnNext.addEventListener('click', nextClick);

  function nextClick() {
    indexDots = indexDots < amountSteps ? indexDots + 1 : amountSteps;
    dots[indexDots].classList.add('carousel__dot_active');
    dots[indexDots - 1].classList.remove('carousel__dot_active');

    stepSlidesMove = stepSlidesMove < maxWidthAllSlides
      ? stepSlidesMove + slideWidth
      : maxWidthAllSlides;
    carousel.style.cssText = `right:${stepSlidesMove}px`;
  }

  function prevClick() {
    indexDots = indexDots > 0 ? indexDots - 1 : 0;
    dots[indexDots + 1].classList.remove('carousel__dot_active');
    dots[indexDots].classList.add('carousel__dot_active');

    stepSlidesMove = stepSlidesMove > 0
      ? stepSlidesMove - slideWidth
      : 0;
    carousel.style.cssText = `right:${stepSlidesMove}px`;
  }
}
