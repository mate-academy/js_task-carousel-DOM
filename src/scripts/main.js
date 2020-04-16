'use strict';

let prevActivDotNum = 1;

function carousel(ev) {
  let leftCoord;
  const nextButton = document.querySelector('.carousel__btn_next');
  const prevButton = document.querySelector('.carousel__btn_prev');

  if (ev.target !== nextButton && ev.target !== prevButton) {
    return;
  }

  const ribbon = document.querySelector('.carousel__list');
  const cardsCount = document.querySelectorAll('.carousel__item').length;
  const dots = [...document.querySelectorAll('.carousel__dot')];
  let deltaX = ribbon.offsetWidth / cardsCount;

  if (ev.target === nextButton) {
    deltaX = -deltaX;
  };

  if (parseInt(ribbon.style.left)) {
    leftCoord = parseInt(ribbon.style.left);
  } else {
    leftCoord = 0;
  }

  let newLeft = leftCoord + deltaX;

  if (newLeft > 0) {
    newLeft = -ribbon.offsetWidth + deltaX;
  };

  if (newLeft < -ribbon.offsetWidth - deltaX) {
    newLeft = 0;
  };

  const newLeftStr = `${newLeft}px`;

  const nextActivDotNum = Math.abs(newLeft / deltaX) + 1;

  dots[prevActivDotNum - 1].classList.remove('carousel__dot_active');
  dots[nextActivDotNum - 1].classList.add('carousel__dot_active');
  prevActivDotNum = nextActivDotNum;

  ribbon.style.left = newLeftStr;
}

document.addEventListener('click', carousel);
