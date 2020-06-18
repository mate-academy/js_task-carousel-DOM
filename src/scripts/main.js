'use strict';

const cardsNumber = document.querySelectorAll('.carousel__item').length;
const cardsList = document.querySelector('.carousel__list');
const cardsButtons = document.querySelectorAll('.carousel__btn');
const cardsDots = document.querySelector('.carousel__dots-wrap').children;

let numberIndex = 1;
let translateX = 0;
const cardSize = 310;

const cardsDotsList = Array.from(cardsDots);

function dotsColors(dot) {
  return cardsDotsList.map(item => {
    if (item === dot) {
      item.style.opacity = '1';
    } else {
      item.style.opacity = '0.5';
    }

    return item;
  });
}

cardsDotsList.forEach((dot, index) => {
  dot.addEventListener('click', e => {
    cardsList.style.transform = `translateX(${-cardSize * index}px)`;
    numberIndex = index + 1;

    if (index === 0) {
      translateX = 0;
    } else {
      translateX = -cardSize * index;
    }
    dotsColors(e.target);
  });
});

cardsButtons.forEach(button => {
  button.addEventListener('click', e => {
    if (e.target.id === 'previous') {
      if (numberIndex !== 1) {
        numberIndex--;
        translateX += cardSize;
        cardsDots[numberIndex - 1].style.opacity = '1';
        cardsDots[numberIndex].style.opacity = '0.5';
      }
    } else {
      if (numberIndex !== cardsNumber) {
        numberIndex++;
        translateX -= cardSize;
        cardsDots[numberIndex - 1].style.opacity = '1';
        cardsDots[numberIndex - 2].style.opacity = '0.5';
      }
    }

    cardsList.style.transform = `translateX(${translateX}px)`;
  });
});
