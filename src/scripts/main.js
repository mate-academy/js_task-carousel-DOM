'use strict';

document.body.addEventListener('click', runCarousel());

function runCarousel() {
  const carousel = document.querySelector('.carousel');
  const carouselItems = carousel.querySelectorAll('.carousel__item');
  const widthCarouselItem = carouselItems[0].offsetWidth;
  const marginBetweemItems = carouselItems[1].offsetLeft
    - carouselItems[0].offsetLeft
    - widthCarouselItem;
  const moveCarousel = widthCarouselItem + marginBetweemItems;

  let position = 0;
  let numTwit = 1;

  function moveTwit(e) {
    const btnNext = e.target.closest('.carousel__btn_next');
    const btnPrev = e.target.closest('.carousel__btn_prev');

    if (btnNext && numTwit < carouselItems.length) {
      numTwit += 1;
      position -= moveCarousel;

      moveDot(1);
    } else if (btnPrev && numTwit > 1) {
      numTwit -= 1;
      position += moveCarousel;

      moveDot(-1);
    }

    carousel.style.transform = `translateX(${position}px)`;
  }

  const carouselDots = document.querySelectorAll('.carousel__dot');
  let indexActiveDot = 0;

  function moveDot(dotNextOrPrev) {
    carouselDots[indexActiveDot].classList.remove('carousel__dot_active');

    carouselDots[indexActiveDot + dotNextOrPrev]
      .classList.add('carousel__dot_active');
    indexActiveDot += dotNextOrPrev;
  }

  return moveTwit;
}
