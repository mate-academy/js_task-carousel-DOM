'use strict';

function init() {
  const arrLeft = document.querySelector('.carousel__btn_prev');
  const arrRight = document.querySelector('.carousel__btn_next');
  const cards = document.querySelectorAll('.carousel__item');

  const carouselCards = document.querySelector('.carousel');
  let dotActive = null;

  let cardMove = 0;

  arrLeft.addEventListener('click', e => {
    if (cardMove < 0) {
      cardMove += 340;
      carouselCards.style.transform = `translateX(${cardMove}px)`;

      dotActive = document.querySelector('.carousel__dot-active');
      dotActive.previousElementSibling.classList.add('carousel__dot-active');
      dotActive.classList.remove('carousel__dot-active');
    }
  });

  arrRight.addEventListener('click', e => {
    if (cardMove > -((cards.length - 1) * 340)) {
      cardMove += -340;
      carouselCards.style.transform = `translateX(${cardMove}px)`;

      dotActive = document.querySelector('.carousel__dot-active');
      dotActive.nextElementSibling.classList.add('carousel__dot-active');
      dotActive.classList.remove('carousel__dot-active');
    }
  });
}

init();
