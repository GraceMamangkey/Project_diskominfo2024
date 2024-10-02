let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("mySlides").length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("mySlides").length;
    }
    showSlidesManual(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlidesManual(slideIndex);
}

function showSlidesManual(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[n-1].style.display = "block";  
}
