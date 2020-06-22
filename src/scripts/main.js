'use strict';

const prev = document.querySelector('.carousel__btn_prev');
const next = document.querySelector('.carousel__btn_next');
const twits = document.querySelector('.carousel__list');
let dot = document.querySelector('.carousel__dot');

let position = 0;
const offset = 350;

function prevTwit() {
  if (position === 0) {
    position = -offset * 4;
    twits.style.transform = `translateX(${position}px)`;
  }
  position += offset;

  twits.style.transform = `translateX(${position}px)`;

  if (!dot.previousElementSibling) {
    const dotWrap = document.querySelector('.carousel__dots-wrap');

    dot.classList.remove('carousel__dot_active');

    dot = dotWrap.lastElementChild;
    dot.classList.add('carousel__dot_active');

    return;
  }

  dot.className = 'carousel__dot';
  dot = dot.previousElementSibling;
  dot.classList.add('carousel__dot_active');
}

function nextTwit() {
  if (position === -offset * 3) {
    position = offset;
    twits.style.transform = `translateX(${position}px)`;
  }
  position -= offset;

  twits.style.transform = `translateX(${position}px)`;

  if (!dot.nextElementSibling) {
    const dotWrap = document.querySelector('.carousel__dots-wrap');

    dot.classList.remove('carousel__dot_active');

    dot = dotWrap.firstElementChild;
    dot.classList.add('carousel__dot_active');

    return;
  }

  dot.className = 'carousel__dot';
  dot = dot.nextElementSibling;
  dot.classList.add('carousel__dot_active');
}

prev.addEventListener('click', prevTwit);
next.addEventListener('click', nextTwit);
