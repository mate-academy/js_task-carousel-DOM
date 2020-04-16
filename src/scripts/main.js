'use strict';

const list = [...document.querySelectorAll('.carousel__item')];
const next = document.querySelector('.carousel__btn_next');
const prev = document.querySelector('.carousel__btn_prev');
const currentCard = document.querySelector('#currentCard');
let index = 0;

list[index].style.display = 'block';

currentCard.append(list[index]);

const nextCard = () => {
  event.preventDefault();
  list[index].style.display = 'none';
  index += 1;

  if (index === list.length) {
    index = 0;
  }
  list[index].style.display = 'block';
};

const prevCard = () => {
  event.preventDefault();
  list[index].style.display = 'none';
  index -= 1;

  if (index === -1) {
    index = list.length - 1;
  }
  list[index].style.display = 'block';
};

next.addEventListener('click', nextCard);
prev.addEventListener('click', prevCard);
