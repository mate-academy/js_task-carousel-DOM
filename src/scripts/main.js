'use strict';

const carouselLink = document.querySelector('.carousel');

function init(carousel) {
  const list = carousel.querySelector('ul');
  const listItem = carousel.querySelector('li');
  const prevButton = carousel.querySelector('.carousel__btn_prev');
  const nextButton = carousel.querySelector('.carousel__btn_next');
  const dotsList = carousel.querySelector('.carousel__dots-wrap');
  const step = listItem.clientWidth + 3;

  let position = 0;

  prevButton.addEventListener('click', function() {
    if (position === 0) {
      position = list.childElementCount;
    }
    position--;
    list.style.transform = `translate(-${position * step}px)`;
    dotActivator();
  });

  nextButton.addEventListener('click', function() {
    if (position >= list.childElementCount - 1) {
      position = -1;
    }
    position++;
    list.style.transform = `translate(-${position * step}px)`;
    dotActivator();
  });

  function dotActivator() {
    for (let i = 0; i < dotsList.children.length; i++) {
      if (i === position) {
        dotsList.children[i].classList.add('carousel__dot_active');
      } else {
        dotsList.children[i].classList.remove('carousel__dot_active');
      }
    }
  }
}
init(carouselLink);
