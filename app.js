let slidePosition = 0;
const slides = document.getElementsByClassName("carousel-item");
const btnPrev = document.getElementsByClassName("btn-prev");
const btnNext = document.getElementsByClassName("btn-next");
const totalSlides = slides.length;

document
  .getElementById("carousel-button-next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });

document
  .getElementById("carousel-button-prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

// document
//   .getElementsByClassName("carousel-item")
//   .addEventListener("mouseenter", function () {
//     showPrev();
//     console.log("123");
//   });
// document.querySelectorAll(".hero-img").addEventListener("mouseover", showPrev);

const search = document.querySelector(".search");
const btn = document.querySelector(".btn2");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

// function showPrev() {
//   document.getElementById("carousel-button-prev").style.color = "#e67e22";
//   document.getElementById("carousel-button-prev").style.fontSize = "xx-large";
// }

// function showNext() {
//   document.getElementById("carousel-button-next").style.color = "#e67e22";
//   document.getElementById("carousel-button-next").style.fontSize = "xx-large";
// }

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}
