'use strict';

const tweets = document.querySelector('.carousel').children;
const prev = document.querySelector('.carousel__btn_prev');
const next = document.querySelector('.carousel__btn_next');
const dots = document.querySelector('.carousel__dots-wrap').children;

let curTweet = 0;

document.addEventListener('click', (e) => {
  if (e.target === prev) {
    e.preventDefault();

    if (curTweet > 0) {
      dots[curTweet].classList.toggle('carousel__dot_active');

      tweets[--curTweet].scrollIntoView({ behavior: 'smooth' });

      dots[curTweet].classList.toggle('carousel__dot_active');
    }
  }

  if (e.target === next) {
    e.preventDefault();

    if (curTweet < tweets.length - 1) {
      dots[curTweet].classList.toggle('carousel__dot_active');

      dots[curTweet + 1].classList.toggle('carousel__dot_active');

      tweets[++curTweet].scrollIntoView({ behavior: 'smooth' });
      tweets[curTweet].selection.empty();
    }
  }
});
