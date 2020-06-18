'use strict';

const cardsNumber = document.querySelectorAll('.carousel__item').length;
const cardsList = document.querySelector('.carousel__list');
const cardsButtons = document.querySelectorAll('.carousel__btn');
const cardsDots = document.querySelector('.carousel__dots-wrap').children;

let numberIndex = 1;
let translateX = 0;

cardsButtons.forEach(button => {
  button.addEventListener('click', e => {
    if (e.target.id === 'previous') {
      if (numberIndex !== 1) {
        numberIndex--;
        translateX += 310;
        cardsDots[numberIndex - 1].style.opacity = '1';
        cardsDots[numberIndex].style.opacity = '0.5';
      }
    } else {
      if (numberIndex !== cardsNumber) {
        numberIndex++;
        translateX -= 310;
        cardsDots[numberIndex - 1].style.opacity = '1';
        cardsDots[numberIndex - 2].style.opacity = '0.5';
      }
    }

    cardsList.style.transform = `translateX(${translateX}px)`;
  });
});
