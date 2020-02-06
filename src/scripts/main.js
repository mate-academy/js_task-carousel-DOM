'use strict';

const carouselWrapper = document.createElement('div');
const carouselBtn = document.querySelectorAll('.carousel__btn');
const prevBtn = document.querySelector('.carousel__btn_prev');
const nextBtn = document.querySelector('.carousel__btn_next');
const carousel = document.querySelector('.carousel');
const carouselItem = document.querySelector('.carousel__item');
const carouselDots = document.querySelector('.carousel__dots-wrap');
const carouselDot = document.getElementsByClassName('carousel__dot');
const numberOfSlides = document.querySelectorAll('.carousel__item').length;
const slideWidth = carouselItem.offsetWidth;
const classDots = (elements, classToggle) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove(classToggle);
  }
};

let position = 0;
let counter = -1;

carouselWrapper.classList.add('carousel-wrapper');

document.body.append(carouselWrapper);

carouselBtn.forEach((item) => {
  carouselWrapper.append(item);
});

for (let i = 0; i < numberOfSlides; i++) {
  carouselDots.children[i].setAttribute('data-dot-count', i);
}

carouselWrapper.append(carousel);
carouselWrapper.append(carouselDots);

prevBtn.setAttribute('data-side', slideWidth);
prevBtn.setAttribute('data-count', '-1');
nextBtn.setAttribute('data-side', -slideWidth);
nextBtn.setAttribute('data-count', '1');

carouselDots.addEventListener('click', function(ev) {
  const dataDotCount = parseInt(ev.target.getAttribute('data-dot-count'));

  classDots(carouselDot, 'carousel__dot_active');
  carouselDot[dataDotCount].classList.add('carousel__dot_active');
  position = dataDotCount * -slideWidth;
  carouselItem.style.marginLeft = `${position}px`;
  counter = dataDotCount - 1;
});

for (let i = 0; i < carouselBtn.length; i++) {
  carouselBtn[i].addEventListener('click', function(ev) {
    const dataArrow = parseInt(ev.target.getAttribute('data-side'));
    const dataCount = parseInt(ev.target.getAttribute('data-count'));

    counter += dataCount;

    if (
      counter >= numberOfSlides - 1
      && ev.target.classList.contains('carousel__btn_next')
    ) {
      position = slideWidth;
      counter = -1;
    }

    if (
      counter <= -1
      && ev.target.classList.contains('carousel__btn_prev')
    ) {
      position = -dataArrow * numberOfSlides;
      counter = 3;
    }

    position += dataArrow;

    carouselItem.style.marginLeft = `${position}px`;

    const activeDot = document.querySelector('.carousel__dot_active');
    let activeDotCount = parseInt(activeDot.getAttribute('data-dot-count'));

    classDots(carouselDot, 'carousel__dot_active');

    if (activeDotCount === 3 && dataCount === 1) {
      activeDotCount = -1;
    }

    if (activeDotCount === 0 && dataCount === -1) {
      activeDotCount = 4;
    }

    carouselDot[activeDotCount + dataCount]
      .classList.add('carousel__dot_active');
  });
}
