'use strict';

const listOfCards = document.querySelector('.carousel__list');
const cards = [...listOfCards.children];
const prevButton = document.querySelector('.carousel__btn_prev');
const nextButton = document.querySelector('.carousel__btn_next');
const dotsWrap = document.querySelector('.carousel__dots-wrap');
const dots = [...dotsWrap.children];

const cardWidth = cards[0].getBoundingClientRect().width;

cards.forEach((card, i) => {
  card.style.left = cardWidth * i + 'px';
});

const moveToCard = (list, currentCard, targetCard) => {
  list.style.transform = `translateX(-${targetCard.style.left})`;
  currentCard.classList.remove('carousel__item_current');
  targetCard.classList.add('carousel__item_current');
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('carousel__dot_active');
  targetDot.classList.add('carousel__dot_active');
};

const onPrevButtonClick = (evt) => {
  const currentCard = listOfCards.querySelector('.carousel__item_current');
  const prevCard = currentCard.previousElementSibling;
  const currentDot = dotsWrap.querySelector('.carousel__dot_active');
  const prevDot = currentDot.previousElementSibling;

  moveToCard(listOfCards, currentCard, prevCard);
  updateDots(currentDot, prevDot);
};

const onNextButtonClick = (evt) => {
  const currentCard = listOfCards.querySelector('.carousel__item_current');
  const nextCard = currentCard.nextElementSibling;
  const currentDot = dotsWrap.querySelector('.carousel__dot_active');
  const nextDot = currentDot.nextElementSibling;

  moveToCard(listOfCards, currentCard, nextCard);
  updateDots(currentDot, nextDot);
};

const onDotClick = (evt) => {
  const targetDot = evt.target.closest('.carousel__dot');

  if (!targetDot) {
    return;
  }

  const currentCard = listOfCards.querySelector('.carousel__item_current');
  const currentDot = dotsWrap.querySelector('.carousel__dot_active');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetCard = cards[targetIndex];

  moveToCard(listOfCards, currentCard, targetCard);
  updateDots(currentDot, targetDot);
};

prevButton.addEventListener('click', onPrevButtonClick);
nextButton.addEventListener('click', onNextButtonClick);
dotsWrap.addEventListener('click', onDotClick);
