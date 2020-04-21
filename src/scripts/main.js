'use strict';

const prevBnt = document.querySelector('.carousel__btn_prev');
const nextBnt = document.querySelector('.carousel__btn_next');
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.twitter-card');
const dots = document.querySelectorAll('.carousel__dot');

const cardWidth = 310;
let count = 0;

prevBnt.addEventListener('click', e => {
  e.preventDefault();

  const target = e.target;

  if (count === 0) {
    dots[count].classList.remove('carousel__dot_active');
    count = cards.length;
    swipe(target, carousel);

    dots[count].classList.add('carousel__dot_active');

    return;
  }

  swipe(target, carousel);

  dots[count + 1].classList.remove('carousel__dot_active');
  dots[count].classList.add('carousel__dot_active');
});

nextBnt.addEventListener('click', e => {
  e.preventDefault();

  const target = e.target;

  if (count === cards.length - 1) {
    dots[count].classList.remove('carousel__dot_active');
    count = -1;
    swipe(target, carousel);

    dots[count].classList.add('carousel__dot_active');

    return;
  }

  swipe(target, carousel);

  dots[count - 1].classList.remove('carousel__dot_active');
  dots[count].classList.add('carousel__dot_active');
});

function swipe(eventTarget, slide) {
  [slide].forEach(card => {
    if (eventTarget === nextBnt) {
      count++;
      card.style.transform = `translateX(${-cardWidth * count}px)`;
    } else {
      count--;
      card.style.transform = `translateX(${-cardWidth * count}px)`;
    }
  });
}
