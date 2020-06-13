'use strict';

const wrapper = document.querySelector('.carousel-wrapper');
const slider = document.querySelector('.carousel');
const dots = [...wrapper.querySelector('.carousel__dots-wrap').children];

const carousel = {
  quantity: dots.length - 1,
  counter: 0,
};

wrapper.addEventListener('click', function(e) {
  if (e.target.classList.contains('carousel__btn')) {
    const side = getModifier(e.target);

    side === 'prev' ? carousel.counter-- : carousel.counter++;
  }

  if (e.target.classList.contains('carousel__dot')) {
    carousel.counter = dots.indexOf(e.target);
  }

  setCarousel();
  setDots();
});

function setCarousel() {
  if (carousel.counter < 0) {
    carousel.counter = carousel.quantity;
  } else if (carousel.counter > carousel.quantity) {
    carousel.counter = 0;
  }

  slider.style.transform = `translate(${-carousel.counter * 100}%)`;
}

function getModifier(element) {
  const pattern = /[a-z]+_[a-z]+/g;
  const matches = element.classList.value.match(pattern);

  return matches[0].split('_')[1];
}

function setDots() {
  const modifier = 'carousel__dot_active';

  dots.map(dot => dot.classList.remove(modifier));
  dots[carousel.counter].classList.add(modifier);
}
