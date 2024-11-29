let currentSlide = 0;
const slides = document.querySelector(".slides");
const sliderCount = document.querySelectorAll(".slide").length;
const intervelTime = 3000;
// let autoSlide = true;
let intervalId;
function next() {
    currentSlide = (currentSlide + 1) % sliderCount; 
    updateSlider();
  }

  function previous() {
    currentSlide = (currentSlide - 1 + sliderCount) % sliderCount;
    updateSlider();
  }

  function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }


function startAutoSlide() {
    intervalId = setInterval(next, intervelTime)
}

function stopAutoSlide() {
    clearInterval(slideIntervel);
}

document.querySelector(".next").addEventListener("click", () => {
    next();
    startAutoSlide();
    stopAutoSlide();
  });
  document.querySelector(".prev").addEventListener("click", () => {
    previous();
    startAutoSlide();
    stopAutoSlide();
  });

  startAutoSlide();