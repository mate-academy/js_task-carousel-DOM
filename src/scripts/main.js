'use strict';

const cards = document.querySelectorAll('.twitter-card');
const buttonLeft = document.querySelector('.carousel__btn_prev');
const buttonRight = document.querySelector('.carousel__btn_next');
const dots = document.querySelectorAll('.carousel__dot');
let counter = 0;  //счётчик, указывающий на текущий слайд
let targetCardPrev;
let targetCardNext;
let positionPrev;
let positionNext;
let eventIsRunning = false;

cards.forEach(function(item, i) {
  item.className += ` twitter-card_${i}`; //Создаём новые модификаторы
  i > 0 ? item.style.display = 'none' : item.style.display = 'flex'; //Добавляем им стили
});

buttonRight.addEventListener('click', function() { //Говнокод 1
  if (eventIsRunning) {
    return;
  }

  eventIsRunning = true;
  positionPrev = 0;
  positionNext = 40;
  targetCardPrev = document.querySelector(`.twitter-card_${counter}`);
  targetCardPrev.style.display = 'flex';
  targetCardPrev.style.left = '0';

  if (counter === cards.length - 1) {
    counter = -1;
  }

  targetCardNext = document.querySelector(`.twitter-card_${counter + 1}`);
  targetCardNext.style.display = 'flex';
  targetCardNext.style.left = `320px`;

  const animation1 = setInterval(() => {
    if (positionPrev === -40) {
      clearInterval(animation1);
      eventIsRunning = false;
    } else {
      positionPrev--;
    }
    targetCardPrev.style.left = `${positionPrev * 8}px`;
  }, 8);

  const animation2 = setInterval(() => {
    if (positionNext === 0) {
      clearInterval(animation2);
      eventIsRunning = false;
    } else {
      positionNext--;
    }
    targetCardNext.style.left = `${positionNext * 8}px`;
  }, 8);

  counter++;

  dots[counter].className += ` carousel__dot_active`;

  if (counter !== 0) {
    dots[counter - 1].className = `carousel__dot`;
  }

  if (counter === 0) {
    dots[cards.length - 1].className = `carousel__dot`;
  }
});

buttonLeft.addEventListener('click', function() { //Говнокод 2
  if (eventIsRunning) {
    return;
  }

  eventIsRunning = true;
  positionPrev = 0;
  positionNext = -40;
  targetCardPrev = document.querySelector(`.twitter-card_${counter}`);
  targetCardPrev.style.display = 'flex';
  targetCardPrev.style.left = '0';

  if (counter === 0) {
    counter = cards.length;
  }

  targetCardNext = document.querySelector(`.twitter-card_${counter - 1}`);
  targetCardNext.style.display = 'flex';
  targetCardNext.style.left = `-320px`;

  const animation1 = setInterval(() => {
    if (positionPrev === 40) {
      clearInterval(animation1);
      eventIsRunning = false;
    } else {
      positionPrev++;
    }
    targetCardPrev.style.left = `${positionPrev * 8}px`;
  }, 8);

  const animation2 = setInterval(() => {
    if (positionNext === 0) {
      clearInterval(animation2);
      eventIsRunning = false;
    } else {
      positionNext++;
    }
    targetCardNext.style.left = `${positionNext * 8}px`;
  }, 8);

  counter--;

  dots[counter].className += ` carousel__dot_active`;

  if (counter !== cards.length - 1) {
    dots[counter + 1].className = `carousel__dot`;
  }

  if (counter === cards.length - 1) {
    dots[0].className = `carousel__dot`;
  }
});

//Вы восхитительны =) Не трогайте это, оно работает.
