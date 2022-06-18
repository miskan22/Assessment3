//Finds the slide containers from the html by its classname
var slideshowContainers = document.getElementsByClassName("slideshow-container");
//setting number of slides by images
for(let s = 0; s < slideshowContainers.length; s++) {      
    var cycle = slideshowContainers[s].dataset.cycle;
    var slides = slideshowContainers[s].querySelectorAll('.mySlides');
    var slideIndex = 0;
    showSlides(slides, slideIndex, cycle);
};
//showing slides by images
function showSlides(slides, slideIndex, cycle) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    };
    slides[slideIndex - 1].style.display = "block";
    setTimeout(function() {
        showSlides(slides, slideIndex, cycle)
    }, cycle);
};