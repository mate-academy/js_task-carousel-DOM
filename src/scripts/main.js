'use strict';
const items = document.querySelectorAll('.carousel__item');
const next = document.querySelector('.carousel__btn_next');
const prev = document.querySelector('.carousel__btn_prev');
const dots = document.querySelectorAll('.carousel__dot');
let index = 0;
let end = false;

next.addEventListener('click', () => {
  index += 1;
  end = false;
  if (index > 3) {
    index = 3;
    end = true;
  }
  setVisibility(index, true, end);
});

prev.addEventListener('click', () => {
  index -= 1;
  end = false;
  if (index < 0) {
    index = 0;
    end = true;
  }
  setVisibility(index, false, end);
});

function setVisibility(ind, option) {
  if (option) {
    items[index - 1].classList.remove('displayed');
    dots[index - 1].classList.remove('carousel__dot_active');
    if (!end) {
      setAnimation(ind);
      setTimeout(() => removeAnim(index), 500);
    }
  } else {
    items[index + 1].classList.remove('displayed');
    dots[index + 1].classList.remove('carousel__dot_active');
    if (!end) {
      setAnimation(ind);
      setTimeout(() => removeAnim(index), 500);
    }
  }
  items[index].classList.add('displayed');
  dots[index].classList.add('carousel__dot_active');
}

function setAnimation(ind) {
  items[ind].classList.add('animated', 'bounceIn');
}

function removeAnim(ind) {
  items[ind].classList.remove('animated', 'bounceIn');
}
