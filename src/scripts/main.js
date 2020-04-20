'use strict';

const list = document.querySelectorAll('.carousel__item');
const carousel = document.querySelector('.carousel');
const dotsArr = [...document.querySelectorAll('.carousel__dot')];
const leftArrow = document.querySelector('.carousel__btn_prev');
const rightArrow = document.querySelector('.carousel__btn_next');
const carouselContainer = document.querySelector('.container');
let counter = 0;

carouselContainer.style.width = `${list[0].offsetWidth}px`;

leftArrow.addEventListener('click', () => {
  if (counter === 0) {
    counter = list.length - 1;
    cardMover(carousel);

    dotsSetter(dotsArr);
  } else {
    counter--;
    cardMover(carousel);

    dotsSetter(dotsArr);
  }
});

rightArrow.addEventListener('click', () => {
  counter++;

  if (counter === list.length) {
    counter = 0;
    dotsSetter(dotsArr);
  }
  cardMover(carousel);
  dotsSetter(dotsArr);
});

function dotsSetter(dotsList) {
  for (const dot of dotsList) {
    dot.classList.remove('carousel__dot_active');
  }
  dotsArr[counter].classList.add('carousel__dot_active');
}

function cardMover(element) {
  element.style.transform = `translateX(-${counter * list[0].offsetWidth}px)`;
}
