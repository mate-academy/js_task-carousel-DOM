'use strict';
const items = document.querySelectorAll('.carousel__item');
const next = document.querySelector('.carousel__btn_next');
const prev = document.querySelector('.carousel__btn_prev');
const dots = document.querySelectorAll('.carousel__dot');
let myIndex = 0;
let end;

next.addEventListener('click', () => {
  myIndex += 1;
  end = false;
  if (myIndex > 3) {
    myIndex = 3;
    end = true;
  }
  setVisibility(myIndex, true);
});

prev.addEventListener('click', () => {
  myIndex -= 1;
  end = false;
  if (myIndex < 0) {
    myIndex = 0;
    end = true;
  }
  setVisibility(myIndex, false);
});

function setVisibility(index, option) {
  if (option) {
    items[index - 1].classList.remove('displayed');
    dots[index - 1].classList.remove('carousel__dot_active');
    if (!end) {
      setAnimation(index);
      setTimeout(() => setAnimation(index), 500);
    }
  } else {
    items[index + 1].classList.remove('displayed');
    dots[index + 1].classList.remove('carousel__dot_active');
    if (!end) {
      setAnimation(index);
      setTimeout(() => setAnimation(index), 500);
    }
  }
  items[index].classList.add('displayed');
  dots[index].classList.add('carousel__dot_active');
}

function setAnimation(index) {
  items[index].classList.toggle('animated');
  items[index].classList.toggle('bounceIn');
}
