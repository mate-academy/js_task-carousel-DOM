'use strict';

const body = document.body;

function carousel(root) {
  const ref = {
    btnPrev: root.querySelector('.carousel__btn_prev'),
    btnNext: root.querySelector('.carousel__btn_next'),
    carouselWrapper: root.querySelector('.carousel'),
    dotsWrap: root.querySelector('.carousel__dots-wrap'),
    dots: root.querySelectorAll('.carousel__dot'),
    carouselList: root.querySelectorAll('.carousel__item'),
  };
  const { btnPrev,
    btnNext,
    carouselWrapper,
    carouselList,
    dotsWrap,
    dots } = ref;
  const wrapper = document.createElement('section');
  const itemsWrapper = document.createElement('div');

  itemsWrapper.classList.add('carousel__slides-container');
  itemsWrapper.prepend(wrapper);
  itemsWrapper.append(carouselWrapper);

  wrapper.classList.add('wrapper');
  root.prepend(wrapper);
  wrapper.append(btnPrev, itemsWrapper, btnNext, dotsWrap);

  dots.forEach((dot, idx) => dot.setAttribute('data-index', [`index${idx}`]));

  let margin = 0;
  let currentIdx = 0;
  let currentSlide = carouselList[currentIdx];
  const width = 330;

  currentSlide.classList.add('carousel__item--active');

  function handlerSliderControl(e) {
    dots[currentIdx].classList.remove('carousel__dot_active');
    currentSlide.classList.remove('carousel__item--active');

    function next(idx) {
      if (currentIdx === carouselList.length - 1) {
        margin = idx ? idx * width : 0;
        currentIdx = idx || 0;
      } else {
        margin = idx ? idx * (-width) : margin - width;
        currentIdx = idx || currentIdx + 1;
      }
    }

    function prev(idx) {
      if (currentIdx === 0) {
        margin = -width * (carouselList.length - 1);
        currentIdx = carouselList.length - 1;
      } else {
        margin = (idx || idx === 0)
          ? margin - (currentIdx - idx) * (-width)
          : margin + width;

        currentIdx = (idx || idx === 0)
          ? idx
          : currentIdx - 1;
      }
    }

    if (e.target.classList.contains('carousel__dot')) {
      const index = +e.target.getAttribute('data-index').substr(-1, 1);

      if (index > currentIdx) {
        next(index);
      } else if (index < currentIdx) {
        prev(index);
      }
    }

    if (e.target.classList.contains('carousel__btn_prev')) {
      prev();
    }

    if (e.target.classList.contains('carousel__btn_next')) {
      next();
    }

    currentSlide = carouselList[currentIdx];
    currentSlide.classList.add('carousel__item--active');
    dots[currentIdx].classList.add('carousel__dot_active');
    carouselWrapper.style['transform'] = `translateX(${margin}px)`;
  };

  document.addEventListener('click', handlerSliderControl);
}
carousel(body);
