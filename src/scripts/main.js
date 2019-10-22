'use strict';
let slideIndex = 1;
const minusButton = document.getElementById('carousel__btn_prev');
const plusButton = document.getElementById('carousel__btn_next');
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

minusButton.addEventListener('click', () => {
  plusSlides(-1);
});

plusButton.addEventListener('click', () => {
  plusSlides(1);
});

// Thumbnail image controls
// function currentSlide(n) {
//  showSlides(slideIndex = n);
// }

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
    dots[i].className = dots[i].className.replace(' carousel__dot_active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' carousel__dot_active';
}
