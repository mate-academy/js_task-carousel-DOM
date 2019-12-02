'use strict';

const carousel = document.body.querySelector('.carousel');
const prev = document.body.querySelector('.carousel__btn_prev');
const next = document.body.querySelector('.carousel__btn_next');
const cards = document.body.querySelectorAll('.carousel__item');
const dots = document.body.querySelectorAll('.carousel__dot');
const container = document.body.querySelector('.container');
const containerWidth = container.clientWidth;
let count = 1;
let position = 0;
const dotNotActive = dots[1].className;
const dotActive = dots[0].className;

const changeCardsPosition = (currentCount, currentPosition) => {
  carousel.style.transform = `translateX(-${currentPosition}px)`;

  dots.forEach(d => {
    d.className = dotNotActive;
  });
  dots[currentCount - 1].className = dotActive;
};

const getPrevCard = (click) => {
  const prevBtn = click.target;

  if (!prevBtn) {
    return;
  }

  if (count === 1) {
    count = cards.length;
    position = containerWidth * (count - 1);
    changeCardsPosition(count, position);

    return;
  }

  position -= containerWidth;
  count--;
  changeCardsPosition(count, position);
};

const getNextCard = (click) => {
  const nextBtn = click.target;

  if (!nextBtn) {
    return;
  }

  if (count === cards.length) {
    count = 1;
    position = containerWidth * (count - 1);
    changeCardsPosition(count, position);

    return;
  }

  position += containerWidth;
  count++;
  changeCardsPosition(count, position);
};

prev.addEventListener('click', getPrevCard);
next.addEventListener('click', getNextCard);

// const getCardWithDot ;

dots.forEach(
  (dot, index) => {
    dot.addEventListener('click', function(click) {
      const currentDot = click.target;

      if (!currentDot) {
        return;
      }

      count = index + 1;
      position = containerWidth * (count - 1);
      changeCardsPosition(count, position);
    });
  }
);
