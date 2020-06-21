'use strict';

/**
 *  Slider for cards
 */

const carouselViewport = document.querySelector('.carousel-viewport');
const nextButton = document.querySelector('.carousel__btn_next');
const prevButton = document.querySelector('.carousel__btn_prev');
const cardHeight = document.querySelector('.carousel__item')
  .offsetHeight;
const cardWidth = document.querySelector('.carousel__item')
  .offsetWidth;

carouselViewport.style.height = `${cardHeight}px`;
carouselViewport.style.width = `${cardWidth}px`;
carouselViewport.style.overflow = 'hidden';

// // EventListener for previous Button
prevButton.addEventListener('click', () => {
  const dots = document.querySelector('.dots-wrap').children;
  let dotActivePosition;

  // Active dot index finder
  [...dots].forEach((dot, index) => {
    if (dot.classList.contains('dot--active')) {
      dotActivePosition = index;
    }
  });

  // Active dot toggling
  if (dotActivePosition > 0) {
    dots[dotActivePosition].classList.toggle('dot--active');
    dots[dotActivePosition - 1].classList.toggle('dot--active');
  }

  // Smooth scroll function
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    const scrollWidth = cardWidth + 10;
    const scrollStep = scrollWidth / 10;

    carouselViewport.scrollLeft -= scrollStep;
    scrollAmount += scrollStep;

    // Statement for stop scrolling
    if (scrollAmount >= scrollWidth) {
      window.clearInterval(slideTimer);
    }
  }, 40); // interval between scrolling steps (ms)
});

// EventListener for next Button
nextButton.addEventListener('click', e => {
  const dots = document.querySelector('.dots-wrap').children;
  let dotActivePosition;

  [...dots].forEach((dot, index) => {
    if (dot.classList.contains('dot--active')) {
      dotActivePosition = index;
    }
  });

  if (dotActivePosition < dots.length - 1) {
    dots[dotActivePosition].classList.toggle('dot--active');
    dots[dotActivePosition + 1].classList.toggle('dot--active');
  }

  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    const scrollWidth = cardWidth + 10;
    const scrollStep = scrollWidth / 10;

    carouselViewport.scrollLeft += scrollStep;
    scrollAmount += scrollStep;

    if (scrollAmount >= scrollWidth) {
      window.clearInterval(slideTimer);
    }
  }, 40);
});
