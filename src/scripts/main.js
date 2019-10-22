'use strict';
let slideIndex = 1;
const previousButton = document.getElementById('carousel__btn_prev');
const nextButton = document.getElementById('carousel__btn_next');
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

previousButton.addEventListener('click', () => {
  plusSlides(-1);
});

nextButton.addEventListener('click', () => {
  plusSlides(1);
});

function showSlides(n) {
  const slides = document.getElementsByClassName('twitter-card');
  const dots = document.getElementsByClassName('carousel__dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('carousel__dot_active');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('carousel__dot_active');
}
