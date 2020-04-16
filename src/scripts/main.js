'use strict';

const carouselButtons = document.querySelectorAll('.carousel__btn');
const carousel = document.querySelectorAll('.carousel');
const carouselItems = document.querySelectorAll('.twitter-card');
const carouselItemWidth = carousel[0].clientWidth;
const carouselDots = document.querySelectorAll('.carousel__dot');

let count = 0;

carouselButtons[1].addEventListener('click', (evt) => {
  evt.preventDefault();

  if (count === carouselItems.length - 1) {
    return;
  }

  const target = evt.target;

  scrollSlider(target, carousel);
});

carouselButtons[0].addEventListener('click', (evt) => {
  evt.preventDefault();

  if (count === 0) {
    return;
  }

  const target = evt.target;

  scrollSlider(target, carousel);
});

function scrollSlider(eventTarget, slide) {
  slide.forEach(item => {
    if (eventTarget === carouselButtons[1]) {
      count++;
      item.style.transform = `translateX(${-carouselItemWidth * count}px)`;
      carouselDots[count].classList.add('carousel__dot_active');
      carouselDots[count - 1].classList.remove('carousel__dot_active');
    } else {
      count--;
      item.style.transform = `translateX(${-carouselItemWidth * count}px)`;
      carouselDots[count].classList.add('carousel__dot_active');
      carouselDots[count + 1].classList.remove('carousel__dot_active');
    }
  });
}
