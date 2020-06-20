'use strict';

const btnNext = document.querySelector('.carousel__btn_next');
const btnPrev = document.querySelector('.carousel__btn_prev');

const tweets = document.querySelectorAll('.carousel__item');
const dots = document.querySelectorAll('.carousel__dot');

let cardIndex = 0;

btnNext.addEventListener('click', e => {
  cardIndex++;

  if (cardIndex >= 4) {
    cardIndex = 0;
  }

  for (const tweet of tweets) {
    tweet.style.transform = `translateX(-${330 * (cardIndex)}px)`;
  }

  dots[cardIndex].classList.add('carousel__dot_active');

  if (cardIndex === 0) {
    dots[dots.length - 1].classList.remove('carousel__dot_active');
  } else {
    dots[cardIndex - 1].classList.remove('carousel__dot_active');
  }
});

btnPrev.addEventListener('click', e => {
  cardIndex--;

  if (cardIndex < 0) {
    cardIndex = 3;
  }

  for (const tweet of tweets) {
    tweet.style.transform = `translateX(-${330 * (cardIndex)}px)`;
  }

  dots[cardIndex].classList.add('carousel__dot_active');

  if (cardIndex === 3) {
    dots[0].classList.remove('carousel__dot_active');
  } else {
    dots[cardIndex + 1].classList.remove('carousel__dot_active');
  }
});
