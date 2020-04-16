'use strict';

const carouselButtons = document.querySelectorAll('.carousel__btn');
const carousel = document.querySelectorAll('.carousel');
const carouselItems = document.querySelectorAll('.twitter-card');
const carouselItemWidth = carousel[0].clientWidth;
const carouselDots = document.querySelectorAll('.carousel__dot');

let count = 0;

carouselButtons[0].addEventListener('click', (evt) => {
  evt.preventDefault();

  const target = evt.target;

  if (count === 0) {
    carouselDots[count].classList.remove('carousel__dot_active');
    count = carouselItems.length;
    scrollSlider(target, carousel);

    carouselDots[count].classList.add('carousel__dot_active');

    return;
  }

  scrollSlider(target, carousel);

  carouselDots[count + 1].classList.remove('carousel__dot_active');
  carouselDots[count].classList.add('carousel__dot_active');
});

carouselButtons[1].addEventListener('click', (evt) => {
  evt.preventDefault();

  const target = evt.target;

  if (count === carouselItems.length - 1) {
    carouselDots[count].classList.remove('carousel__dot_active');
    count = -1;
    scrollSlider(target, carousel);
    carouselDots[count].classList.add('carousel__dot_active');

    return;
  }

  scrollSlider(target, carousel);

  carouselDots[count - 1].classList.remove('carousel__dot_active');
  carouselDots[count].classList.add('carousel__dot_active');
});

function scrollSlider(eventTarget, slide) {
  slide.forEach(item => {
    if (eventTarget === carouselButtons[1]) {
      count++;
      item.style.transform = `translateX(${-carouselItemWidth * count}px)`;
    } else {
      count--;
      item.style.transform = `translateX(${-carouselItemWidth * count}px)`;
    }
  });
}
