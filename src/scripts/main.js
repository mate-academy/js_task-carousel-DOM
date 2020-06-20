'use strict';

const nextBtn = document.querySelector('.carousel__btn_next');
const prevBtn = document.querySelector('.carousel__btn_prev');
const list = document.querySelectorAll('.carousel__item');
const dots = document.querySelectorAll('.carousel__dot');
let card = 0;

nextBtn.addEventListener('click', e => {
  card++;
  card = card >= 4 ? 0 : card;

  for (const item of list) {
    item.style.transform = `translateX(-${350 * (card)}px)`;
  }

  dots[card].classList.add('carousel__dot_active');

  if (card === 0) {
    dots[dots.length - 1].classList.remove('carousel__dot_active');
  }
  dots[card - 1].classList.remove('carousel__dot_active');
});

prevBtn.addEventListener('click', e => {
  card--;
  card = card < 0 ? 3 : card;

  for (const item of list) {
    item.style.transform = `translateX(-${350 * (card)}px)`;
  }

  dots[card].classList.add('carousel__dot_active');

  if (card === 3) {
    dots[0].classList.remove('carousel__dot_active');
  }
  dots[card + 1].classList.remove('carousel__dot_active');
});
