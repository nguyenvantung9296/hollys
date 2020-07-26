document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function() {
        document.querySelector(".slide").classList.add("active");
    }, 500)
});

function nextSlide() {
    let currSlide = document.querySelector(".slide.active"),
        nextSlide = currSlide.nextElementSibling;

    currSlide.classList.remove("active");
    if(nextSlide) {
        nextSlide.classList.add("active");
    } else {
        document.querySelectorAll(".slide")[0].classList.add("active");
    }
}

function previousSlide() {
    let currSlide = document.querySelector(".slide.active"),
        prevSlide = currSlide.previousElementSibling,
        slideCount = document.querySelectorAll(".slide").length;

    currSlide.classList.remove("active");
    if(prevSlide) {
        prevSlide.classList.add("active");
    } else {
        document.querySelectorAll(".slide")[slideCount - 1].classList.add("active");
    }
}