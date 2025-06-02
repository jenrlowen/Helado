let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');

/*show only one image + only one dot highlighted*/
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

/*move on to next image*/
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

/*amt of time before moving onto next image*/
setInterval(nextSlide, 6000);

/*interactive dots linked to each image*/
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});