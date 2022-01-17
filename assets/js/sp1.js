const searchBtn = document.querySelector('.js-search');
const contentSearch = document.querySelector('.js-content__search');
const containerSearch = document.querySelector('.js-content__search-container');
const closeBars = document.querySelector('.js-close__bars');
const openBars = document.querySelector('.js-open__bars');
const modalBars = document.querySelector('.content__bars');
const containsBars = document.querySelector('.contains__bars');
const rowElements = document.querySelector('.row');
const playVideo = document.querySelector('.js-playing-contents-start');
const contentVideo = document.querySelector('.js-contents-start-video');
const modalVideo = document.querySelector('.js-start-video-play')

searchBtn.addEventListener('click', () => {
    contentSearch.classList.add('open');
});

contentSearch.addEventListener('click', () => {
    contentSearch.classList.remove('open');
});

containerSearch.addEventListener('click', (e) => {
    e.stopPropagation();
});

openBars.addEventListener('click', () => {
    containsBars.classList.add('open');
});

closeBars.addEventListener('click', () => {
    containsBars.classList.remove('open');
});

containsBars.addEventListener('click', () => {
    containsBars.classList.remove('open');
});

modalBars.addEventListener('click', (e) => {
    e.stopPropagation();
});

var slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-content");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
function plusSlides(n) {
    showSlides(slideIndex += n);
}

var slideIndex1 = 0;
showSlides1();
function showSlides1() {
    var i;
    var slides = document.getElementsByClassName("slider-content");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {slideIndex1 = 1}
    slides[slideIndex1-1].style.display = "block";
    setTimeout(showSlides1, 3000); // Change image every 2 seconds
}

// playVideo.onclick = function(e) {
//     e.preventDefault();
// }

playVideo.addEventListener('click', (e) => {
    e.preventDefault();
    contentVideo.classList.add('open');
});

contentVideo.addEventListener('click', () => {
    contentVideo.classList.remove('open');
})


